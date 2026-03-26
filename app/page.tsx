import type { Metadata } from "next";
import Link from "next/link";
import NMLMark from "@/components/NMLMark";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { projects } from "@/lib/projects";

const featuredProject = projects.find((p) => p.hero);

const demoProjects = projects.filter((p) => p.section === "demo" && !p.hero);
const backendProjects = projects.filter((p) => p.section === "backend");
const toolProjects = projects.filter((p) => p.section === "tool");
const experimentProjects = projects.filter((p) => p.section === "experiment");

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
        {/* Site header */}
        <header className="flex flex-col items-center text-center mb-20">
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
              I&apos;m Rob Spence — Solutions Architect by day, AI tool builder by compulsion.
              The projects on this site are things I built because I needed them to exist: real
              tools I use, not demos I forget about. Most of them run on Claude. All of them are
              fully shipped. This portfolio is my proof of work.
            </p>
          </AnimateIn>
        </header>

        {/* Featured: Expert Council */}
        {featuredProject && (
          <AnimateIn delay={100}>
            <section aria-label="Featured project" className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-stone)", fontWeight: 500 }}
                >
                  Featured Project
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-stone) 30%, transparent)" }}
                />
              </div>
              <article
                className="rounded-xl p-8 md:p-10 border"
                style={{
                  borderColor: "color-mix(in srgb, #5B8DEF 40%, transparent)",
                  backgroundColor: "color-mix(in srgb, #5B8DEF 6%, transparent)",
                }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2
                    className="text-3xl md:text-4xl"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
                  >
                    {featuredProject.name}
                  </h2>
                  <span
                    className="font-mono text-xs border rounded px-2 py-0.5"
                    style={{
                      fontWeight: 300,
                      borderColor: "var(--color-ember)",
                      color: "var(--color-ember)",
                    }}
                  >
                    {featuredProject.status}
                  </span>
                </div>
                <p
                  className="text-base md:text-lg mb-6 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "color-mix(in srgb, var(--color-negative-text) 85%, transparent)",
                  }}
                >
                  {featuredProject.tagline}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6 max-w-2xl"
                  style={{ color: "color-mix(in srgb, var(--color-negative-text) 70%, transparent)" }}
                >
                  {featuredProject.metaDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.techTagsPreview.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs border rounded-full px-3 py-1"
                      style={{
                        borderColor: "color-mix(in srgb, #5B8DEF 60%, transparent)",
                        color: "color-mix(in srgb, #5B8DEF 90%, var(--color-negative-text))",
                        fontWeight: 400,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {featuredProject.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200"
                      style={
                        action.variant === "primary"
                          ? { backgroundColor: "#5B8DEF", color: "#fff", fontWeight: 500 }
                          : {
                              borderWidth: 1,
                              borderStyle: "solid",
                              borderColor: "var(--color-stone)",
                              color: "var(--color-bone)",
                              backgroundColor: "transparent",
                              fontWeight: 500,
                            }
                      }
                    >
                      {action.label}
                    </a>
                  ))}
                  <Link
                    href={`/${featuredProject.slug}`}
                    className="inline-block font-mono text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 hover:border-[#5B8DEF]"
                    style={{
                      borderColor: "color-mix(in srgb, #5B8DEF 40%, transparent)",
                      color: "color-mix(in srgb, #5B8DEF 80%, var(--color-negative-text))",
                      fontWeight: 500,
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            </section>
          </AnimateIn>
        )}

        {/* Demos section */}
        <section aria-labelledby="demos-heading" className="mb-16">
          <h2
            id="demos-heading"
            className="text-2xl mb-8"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
          >
            Demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                tagline={project.tagline}
                techTags={project.techTagsPreview}
                status={project.status}
              />
            ))}
          </div>
        </section>

        {/* Backend Tools section */}
        <section aria-labelledby="backend-heading" className="mb-16">
          <h2
            id="backend-heading"
            className="text-2xl mb-2"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
          >
            Backends / API
          </h2>
          <p
            className="mb-8 text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              color: "color-mix(in srgb, var(--color-negative-text) 60%, transparent)",
            }}
          >
            APIs and infrastructure — deployed services, not demos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                tagline={project.tagline}
                techTags={project.techTagsPreview}
                status={project.status}
              />
            ))}
          </div>
        </section>

        {/* Tools & Utilities section */}
        {toolProjects.length > 0 && (
          <section aria-labelledby="tools-heading" className="mb-16">
            <h2
              id="tools-heading"
              className="text-2xl mb-2"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
            >
              Tools &amp; Utilities
            </h2>
            <p
              className="mb-8 text-sm"
              style={{
                fontFamily: "var(--font-sans)",
                color: "color-mix(in srgb, var(--color-negative-text) 60%, transparent)",
              }}
            >
              Open-source tools built for real workflows — not demos, not prototypes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  name={project.name}
                  tagline={project.tagline}
                  techTags={project.techTagsPreview}
                  status={project.status}
                  href={project.actions[0]?.href}
                />
              ))}
            </div>
          </section>
        )}

        {/* Experiments section */}
        {experimentProjects.length > 0 && (
          <section aria-labelledby="experiments-heading">
            <h2
              id="experiments-heading"
              className="text-2xl mb-2"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
            >
              Experiments
            </h2>
            <p
              className="mb-8 text-sm"
              style={{
                fontFamily: "var(--font-sans)",
                color: "color-mix(in srgb, var(--color-negative-text) 60%, transparent)",
              }}
            >
              Research and investigations — not production tools, but real findings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experimentProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  name={project.name}
                  tagline={project.tagline}
                  techTags={project.techTagsPreview}
                  status={project.status}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
