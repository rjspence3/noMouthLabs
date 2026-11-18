import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { SectionLabel } from "@/components/PageShell";
import ProjectRow from "@/components/ProjectRow";
import { getFullProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects — No Mouth Labs",
  description: "Shipped projects by Rob Spence, each with its ship date, live link and ship log.",
};

export default function ProjectsIndex() {
  const projects = getFullProjects();
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <PageShell>
      <h1 className="text-4xl mb-4" style={{ fontWeight: 700 }}>Projects</h1>
      <p className="mb-12 max-w-2xl" style={{ color: "var(--color-bone)" }}>
        Each one has a live link or a dated ship log, most recently updated first. Experiments and works in progress are on the{" "}
        <Link href="/lab" className="underline">Lab</Link> page.
      </p>
      <section className="mb-12">
        <SectionLabel>Featured</SectionLabel>
        <ul>{featured.map((project) => <ProjectRow key={project.slug} project={project} />)}</ul>
      </section>
      {others.length > 0 && (
        <section>
          <SectionLabel>More</SectionLabel>
          <ul>{others.map((project) => <ProjectRow key={project.slug} project={project} />)}</ul>
        </section>
      )}
    </PageShell>
  );
}
