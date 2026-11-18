import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { formatDate, getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing — No Mouth Labs",
  description: "Short posts by Rob Spence about what building each project taught him.",
  alternates: { types: { "application/rss+xml": "/writing/rss.xml" } },
};

export default function WritingIndex() {
  const posts = getPosts();
  return (
    <PageShell>
      <h1 className="text-4xl mb-4" style={{ fontWeight: 700 }}>Writing</h1>
      <p className="mb-12 max-w-2xl" style={{ color: "var(--color-bone)" }}>
        Short posts about what building each project taught me.{" "}
        <a href="/writing/rss.xml" className="underline">RSS</a>
      </p>
      {posts.length === 0 ? (
        <p style={{ color: "var(--color-stone)" }}>The first posts are on their way.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="py-5" style={{ borderTop: "1px solid color-mix(in srgb, var(--color-stone) 25%, transparent)" }}>
              <Link href={`/writing/${post.slug}`} className="group block">
                <time dateTime={post.date} className="font-mono text-xs" style={{ color: "var(--color-stone)" }}>{formatDate(post.date)}</time>
                {post.draft && <span className="ml-3 font-mono text-xs" style={{ color: "var(--color-ember)" }}>Draft</span>}
                <h2 className="text-xl mt-1 group-hover:text-[var(--color-ember)] transition-colors" style={{ fontWeight: 700 }}>{post.title}</h2>
                <p className="mt-1" style={{ color: "var(--color-bone)" }}>{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
