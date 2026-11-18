import Link from "next/link";
import PageShell, { SectionLabel } from "@/components/PageShell";
import ProjectRow from "@/components/ProjectRow";
import { getFullProjects } from "@/lib/content";

export default function Home() {
  // Newest ships first: getFullProjects is ordered by the latest ship log entry.
  const newest = getFullProjects().slice(0, 3);

  return (
    <PageShell>
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl" style={{ fontWeight: 700 }}>
          I build software and sell it.
        </h1>
        <p className="mt-4 text-lg max-w-2xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
          Rob Spence. Everything here is something you can open, with the date it shipped and a log of what changed since.
        </p>
      </header>

      <section className="mb-12">
        <SectionLabel>Latest ships</SectionLabel>
        <ul>
          {newest.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      <p className="font-mono text-xs uppercase tracking-widest flex gap-6">
        <Link href="/projects" className="hover:text-[var(--color-ember)]">All projects →</Link>
        <Link href="/writing" className="hover:text-[var(--color-ember)]">Writing →</Link>
      </p>
    </PageShell>
  );
}
