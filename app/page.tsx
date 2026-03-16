import type { Metadata } from "next";
import Link from "next/link";
import NMLMark from "@/components/NMLMark";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "No Mouth Labs",
  description: "Product experiments in AI, developer tools, and systems thinking.",
};

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-negative)",
        color: "var(--color-negative-text)",
      }}
    >
      <main className="max-w-5xl mx-auto px-6 py-24">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-24">
          <AnimateIn>
            <NMLMark size="lg" />
          </AnimateIn>
          <AnimateIn delay={150}>
            <h1
              className="mt-8 text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
            >
              I build AI tools I actually ship.
            </h1>
          </AnimateIn>
          <AnimateIn delay={250}>
            <p
              className="mt-4 text-lg"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              The work speaks now.
            </p>
          </AnimateIn>
          <AnimateIn delay={350}>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed"
              style={{ color: "color-mix(in srgb, var(--color-negative-text) 75%, transparent)" }}
            >
              I&apos;m Rob Spencer — Solutions Architect by day, AI tool builder by compulsion.
              The projects on this site are things I built because I needed them to exist: real
              tools I use, not demos I forget about. Most of them run on Claude. All of them are
              fully shipped. This portfolio is my proof of work.
            </p>
          </AnimateIn>
          <AnimateIn delay={450}>
            <div className="mt-8">
              <Link
                href="/demo-gauntlet"
                className="inline-block px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: "var(--color-ember)",
                  color: "#fff",
                }}
              >
                See my best demo →
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              name={project.name}
              tagline={project.tagline}
              techTags={project.techTagsPreview}
              status={project.status}
              className={
                index === projects.length - 1
                  ? "md:col-start-1 lg:col-start-2"
                  : ""
              }
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
