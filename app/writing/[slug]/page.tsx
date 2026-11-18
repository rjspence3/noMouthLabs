import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell, { SectionLabel } from "@/components/PageShell";
import { formatDate, getFullProject, getPost, getPosts } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: `${post.title} — No Mouth Labs`, description: post.summary } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  // A post may be about a Lab project, which has no page to link to.
  const projects = post.projects.map((slug) => getFullProject(slug)).filter((project) => project !== undefined);

  return (
    <PageShell>
      <Link href="/writing" className="font-mono text-xs" style={{ color: "var(--color-stone)" }}>← All writing</Link>
      <article className="mt-8">
        <time dateTime={post.date} className="font-mono text-xs" style={{ color: "var(--color-stone)" }}>{formatDate(post.date)}</time>
        {post.draft && <span className="ml-3 font-mono text-xs" style={{ color: "var(--color-ember)" }}>Draft, not published</span>}
        <h1 className="text-4xl mt-2 mb-8" style={{ fontWeight: 700 }}>{post.title}</h1>
        <div className="prose-nml" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </article>
      {projects.length > 0 && (
        <section className="mt-12">
          <SectionLabel>About</SectionLabel>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.slug}><Link href={`/projects/${project.slug}`} className="underline">{project.title}</Link></li>
            ))}
          </ul>
        </section>
      )}
    </PageShell>
  );
}
