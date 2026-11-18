import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell, { SectionLabel } from "@/components/PageShell";
import StatusLine from "@/components/StatusLine";
import { formatDate, getFullProject, getFullProjects, getPostsForProject } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getFullProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getFullProject((await params).slug);
  return project ? { title: `${project.title} — No Mouth Labs`, description: project.summary } : {};
}

const button = "inline-block font-mono text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getFullProject((await params).slug);
  if (!project) notFound();
  const posts = getPostsForProject(project.slug);
  const links = [
    ...(project.liveUrl ? [{ label: "Open it", href: project.liveUrl, primary: true }] : []),
    ...(project.codeUrl && project.codeUrl !== project.liveUrl ? [{ label: "Code", href: project.codeUrl, primary: false }] : []),
    ...project.links.map((link) => ({ ...link, primary: false })),
  ];

  return (
    <PageShell>
      <Link href="/projects" className="font-mono text-xs" style={{ color: "var(--color-stone)" }}>← All projects</Link>

      <header className="mt-8 mb-12">
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 700 }}>{project.title}</h1>
        <StatusLine project={project} />
        <p className="mt-6 text-lg max-w-2xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
          {project.summary}
        </p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={button}
                style={
                  link.primary
                    ? { backgroundColor: "var(--color-ember)", borderColor: "var(--color-ember)", color: "#fff" }
                    : { borderColor: "var(--color-stone)", color: "var(--color-bone)" }
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {(project.metric || project.image) && (
        <section className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr] items-start">
          {project.metric && (
            <div>
              <p className="text-5xl" style={{ fontWeight: 700, color: "var(--color-ember)" }}>{project.metric.value}</p>
              <p className="mt-2" style={{ color: "var(--color-bone)" }}>{project.metric.label}</p>
              <p className="mt-1 font-mono text-xs" style={{ color: "var(--color-stone)" }}>As of {project.metric.asOf}</p>
            </div>
          )}
          {project.image && (
            // Plain img: screenshots are static files in public/ and the site has no image loader configured.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image.src} alt={project.image.alt} className="w-full border" style={{ borderColor: "var(--color-stone)" }} />
          )}
        </section>
      )}

      {project.bodyHtml && (
        <section className="mb-12 prose-nml" dangerouslySetInnerHTML={{ __html: project.bodyHtml }} />
      )}

      {project.shipLog.length > 0 && (
        <section className="mb-12">
          <SectionLabel>Ship log</SectionLabel>
          <ol>
            {project.shipLog.map((entry) => (
              <li key={`${entry.date}-${entry.note}`} className="grid grid-cols-[7.5rem_1fr] gap-4 py-2">
                <time dateTime={entry.date} className="font-mono text-xs pt-1" style={{ color: "var(--color-stone)" }}>
                  {formatDate(entry.date)}
                </time>
                <span>{entry.note}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="mb-12">
        <SectionLabel>Stack</SectionLabel>
        <p style={{ color: "var(--color-bone)" }}>{project.stack}</p>
      </section>

      {posts.length > 0 && (
        <section>
          <SectionLabel>What I learned</SectionLabel>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`} className="underline">{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageShell>
  );
}
