import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ProjectStatus = "live" | "beta" | "retired";

export interface Link {
  label: string;
  href: string;
}

export interface ShipLogEntry {
  date: string;
  note: string;
}

export interface Metric {
  value: string;
  label: string;
  asOf: string;
}

interface ProjectBase {
  slug: string;
  title: string;
  summary: string;
  links: Link[];
}

// A project either earns a full page or is one line on the Lab page. The two shapes are
// separate types so a full page cannot exist without its proof: the loader rejects a
// `page: full` file that has neither a live link nor a dated ship log.
export interface FullProject extends ProjectBase {
  page: "full";
  status: ProjectStatus;
  shipped: string;
  updated: string;
  liveUrl?: string;
  codeUrl?: string;
  stack: string;
  featured: boolean;
  metric?: Metric;
  image?: { src: string; alt: string };
  shipLog: ShipLogEntry[];
  bodyHtml: string;
}

export interface LabProject extends ProjectBase {
  page: "lab";
  note?: string;
}

export type Project = FullProject | LabProject;

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  projects: string[];
  draft: boolean;
  bodyHtml: string;
}

// Drafts show in `next dev` and on Vercel preview deployments, so they can be read
// before publishing, and never in a production build.
const SHOW_DRAFTS = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview";

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SHIP_LOG_HEADING = /^##\s+Ship log\s*$/im;
const SHIP_LOG_LINE = /^-\s+(\d{4}-\d{2}-\d{2}):\s+(.+)$/;

class ContentError extends Error {
  constructor(file: string, message: string) {
    super(`content/${file}: ${message}`);
  }
}

// YAML turns an unquoted 2026-02-24 into a Date; quoted, it stays a string. Accept both.
function toDate(value: unknown, file: string, field: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && DATE.test(value)) return value;
  throw new ContentError(file, `${field} must be a YYYY-MM-DD date, got ${JSON.stringify(value)}`);
}

function requireString(data: Record<string, unknown>, field: string, file: string): string {
  const value = data[field];
  if (typeof value !== "string" || value.trim() === "") {
    throw new ContentError(file, `missing required field "${field}"`);
  }
  return value.trim();
}

function optionalString(data: Record<string, unknown>, field: string, file: string): string | undefined {
  const value = data[field];
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value !== "string") throw new ContentError(file, `"${field}" must be text`);
  return value.trim();
}

function parseLinks(value: unknown, file: string): Link[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) throw new ContentError(file, `"links" must be a list`);
  return value.map((item, index) => {
    if (typeof item?.label !== "string" || typeof item?.href !== "string") {
      throw new ContentError(file, `links[${index}] needs a label and an href`);
    }
    return { label: item.label, href: item.href };
  });
}

// The ship log lives in the body under "## Ship log", one "- YYYY-MM-DD: what shipped" line
// per entry. It is lifted out of the story so the template can render it as its own block;
// a line under that heading in any other shape fails the build rather than vanishing.
function splitShipLog(body: string, file: string): { shipLog: ShipLogEntry[]; story: string } {
  const heading = SHIP_LOG_HEADING.exec(body);
  if (!heading) return { shipLog: [], story: body };

  const afterHeading = body.slice(heading.index + heading[0].length);
  const nextHeading = afterHeading.search(/^##\s/m);
  const section = nextHeading === -1 ? afterHeading : afterHeading.slice(0, nextHeading);
  const rest = nextHeading === -1 ? "" : afterHeading.slice(nextHeading);

  const shipLog = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "")
    .map((line) => {
      const match = SHIP_LOG_LINE.exec(line);
      if (!match) throw new ContentError(file, `ship log line is not "- YYYY-MM-DD: note": ${line}`);
      return { date: match[1], note: match[2] };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return { shipLog, story: body.slice(0, heading.index) + rest };
}

function markdownFiles(folder: string): string[] {
  const dir = path.join(CONTENT_DIR, folder);
  // Files starting with "_" are templates and notes, never published.
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .sort();
}

function parseProject(fileName: string): Project {
  const file = `projects/${fileName}`;
  const { data, content } = matter(fs.readFileSync(path.join(CONTENT_DIR, file), "utf8"));
  const base: ProjectBase = {
    slug: fileName.replace(/\.md$/, ""),
    title: requireString(data, "title", file),
    summary: requireString(data, "summary", file),
    links: parseLinks(data.links, file),
  };

  if (data.page === "lab") {
    return { ...base, page: "lab", note: optionalString(data, "note", file) };
  }
  if (data.page !== "full") {
    throw new ContentError(file, `"page" must be "full" or "lab"`);
  }

  const status = data.status;
  if (status !== "live" && status !== "beta" && status !== "retired") {
    throw new ContentError(file, `"status" must be live, beta or retired`);
  }

  const { shipLog, story } = splitShipLog(content, file);
  const liveUrl = optionalString(data, "live_url", file);
  if (!liveUrl && shipLog.length === 0) {
    throw new ContentError(file, `a full page needs a live_url or a dated ship log; otherwise use "page: lab"`);
  }

  const shipped = toDate(data.shipped, file, "shipped");
  const metric = data.metric
    ? {
        value: requireString(data.metric, "value", file),
        label: requireString(data.metric, "label", file),
        asOf: requireString(data.metric, "as_of", file),
      }
    : undefined;
  const image = data.image
    ? { src: requireString(data.image, "src", file), alt: requireString(data.image, "alt", file) }
    : undefined;

  return {
    ...base,
    page: "full",
    status,
    shipped,
    // Derived, not written: "last updated" is the newest ship log entry, so it cannot drift
    // from the log it summarizes.
    updated: shipLog[0]?.date ?? shipped,
    liveUrl,
    codeUrl: optionalString(data, "code_url", file),
    stack: requireString(data, "stack", file),
    featured: data.featured === true,
    metric,
    image,
    shipLog,
    bodyHtml: marked.parse(story.trim(), { async: false }),
  };
}

function parsePost(fileName: string): Post | null {
  const file = `writing/${fileName}`;
  const { data, content } = matter(fs.readFileSync(path.join(CONTENT_DIR, file), "utf8"));
  const draft = data.draft === true;
  if (draft && !SHOW_DRAFTS) return null;
  const projects = data.projects ?? [];
  if (!Array.isArray(projects) || projects.some((slug) => typeof slug !== "string")) {
    throw new ContentError(file, `"projects" must be a list of project slugs`);
  }
  return {
    slug: fileName.replace(/\.md$/, ""),
    title: requireString(data, "title", file),
    date: toDate(data.date, file, "date"),
    summary: requireString(data, "summary", file),
    projects,
    draft,
    bodyHtml: marked.parse(content.trim(), { async: false }),
  };
}

let cache: { projects: Project[]; posts: Post[] } | null = null;

function load() {
  if (cache) return cache;
  const projects = markdownFiles("projects").map(parseProject);
  const posts = markdownFiles("writing")
    .map(parsePost)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));

  const slugs = new Set(projects.map((project) => project.slug));
  for (const post of posts) {
    for (const slug of post.projects) {
      if (!slugs.has(slug)) throw new ContentError(`writing/${post.slug}.md`, `unknown project "${slug}"`);
    }
  }
  cache = { projects, posts };
  return cache;
}

export function getFullProjects(): FullProject[] {
  return load()
    .projects.filter((project): project is FullProject => project.page === "full")
    .sort((a, b) => b.updated.localeCompare(a.updated));
}

export function getLabProjects(): LabProject[] {
  return load()
    .projects.filter((project): project is LabProject => project.page === "lab")
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getFullProject(slug: string): FullProject | undefined {
  return getFullProjects().find((project) => project.slug === slug);
}

export function getPosts(): Post[] {
  return load().posts;
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function getPostsForProject(slug: string): Post[] {
  return getPosts().filter((post) => post.projects.includes(slug));
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
