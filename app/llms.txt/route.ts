import { formatDate, getFullProjects, getLabProjects, getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// Generated from content/ so it can't drift from the site the way the old hand-written file did.
export function GET() {
  const projects = getFullProjects()
    .map((project) =>
      [
        `### ${project.title}`,
        `- ${project.summary}`,
        `- Status: ${project.status}, shipped ${formatDate(project.shipped)}, updated ${formatDate(project.updated)}`,
        project.liveUrl && `- Live: ${project.liveUrl}`,
        project.codeUrl && `- Code: ${project.codeUrl}`,
        `- Stack: ${project.stack}`,
        `- Page: ${site.url}/projects/${project.slug}`,
      ]
        .filter(Boolean)
        .join("\n")
    )
    .join("\n\n");
  const lab = getLabProjects().map((project) => `- ${project.title}: ${project.summary}`).join("\n");
  const posts = getPosts().map((post) => `- ${post.title} (${post.date}): ${site.url}/writing/${post.slug}`).join("\n");

  const text = `# ${site.name} — ${site.owner}

> Software ${site.owner} built and shipped. Every project page lists its ship date, links and a dated ship log.

Paid products are sold by ${site.seller.name} (${site.seller.url}).

## Projects

${projects}

## Lab

${lab}

## Writing

${posts || "No posts yet."}
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
