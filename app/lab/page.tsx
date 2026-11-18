import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getLabProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lab — No Mouth Labs",
  description: "Experiments, prototypes and works in progress by Rob Spence.",
};

export default function Lab() {
  const projects = getLabProjects();
  return (
    <PageShell>
      <h1 className="text-4xl mb-4" style={{ fontWeight: 700 }}>Lab</h1>
      <p className="mb-12 max-w-2xl" style={{ color: "var(--color-bone)" }}>
        Experiments, prototypes and things still in the workshop. One moves to{" "}
        <Link href="/projects" className="underline">Projects</Link> when it has a live link or a dated ship log.
      </p>
      <ul>
        {projects.map((project) => (
          <li
            key={project.slug}
            id={project.slug}
            className="py-4 grid gap-1 md:grid-cols-[14rem_1fr] md:gap-6"
            style={{ borderTop: "1px solid color-mix(in srgb, var(--color-stone) 25%, transparent)" }}
          >
            <span style={{ fontWeight: 600 }}>{project.title}</span>
            <span style={{ color: "var(--color-bone)" }}>
              {project.summary}
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="ml-3 font-mono text-xs underline" style={{ color: "var(--color-stone)" }}>
                  {link.label}
                </a>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
