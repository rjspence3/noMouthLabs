import Link from "next/link";
import type { Project } from "@/lib/projects";
import NMLMark from "./NMLMark";
import Footer from "./Footer";
import AnimateIn from "./AnimateIn";

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const statusColor =
    project.statusColor === "ember"
      ? { borderColor: "var(--color-ember)", color: "var(--color-ember)" }
      : { borderColor: "var(--color-stone)", color: "var(--color-stone)" };

  return (
    <div
      style={{
        ["--accent" as string]: project.flavor.accent,
        backgroundColor: "var(--color-negative)",
        color: "var(--color-negative-text)",
      }}
    >
      {/* Nav */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-sm"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-negative) 90%, transparent)",
        }}
      >
        <div className="flex items-center gap-3">
          <NMLMark size="sm" />
          <span
            className="font-mono text-xs uppercase tracking-widest"
            style={{ fontWeight: 500, color: "var(--color-negative-text)" }}
          >
            {project.name}
          </span>
        </div>
        <Link
          href="/"
          className="font-mono text-xs transition-colors hover:text-[var(--color-negative-text)]"
          style={{ color: "var(--color-stone)", fontWeight: 400 }}
        >
          ← All Projects
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="relative mb-16 md:mb-24">
          <div className="relative" style={{ zIndex: 1 }}>
            <AnimateIn>
              <h1
                className="text-3xl md:text-5xl mb-4"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
              >
                {project.name}
              </h1>
            </AnimateIn>
            <AnimateIn delay={80}>
              <p
                className="text-lg mb-6"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                {project.tagline}
              </p>
            </AnimateIn>
            <AnimateIn delay={160}>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techTagsPreview.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs border rounded-full px-3 py-1"
                    style={{
                      borderColor: "var(--color-stone)",
                      color: "var(--color-stone)",
                      fontWeight: 400,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={220}>
              <span
                className="font-mono text-xs border rounded px-2 py-0.5"
                style={{ fontWeight: 300, ...statusColor }}
              >
                {project.status}
              </span>
            </AnimateIn>
            {project.actions.length > 0 && (
              <AnimateIn delay={300}>
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.actions.map((action) =>
                    action.variant === "primary" ? (
                      <a
                        key={action.label}
                        href={action.href}
                        target={action.href.startsWith("http") ? "_blank" : undefined}
                        rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all"
                        style={{
                          backgroundColor: "var(--accent)",
                          color: "#fff",
                          fontWeight: 500,
                        }}
                      >
                        {action.label}
                      </a>
                    ) : (
                      <a
                        key={action.label}
                        href={action.href}
                        className="inline-block font-mono text-xs uppercase tracking-widest px-5 py-2.5 border transition-all"
                        style={{
                          borderColor: "var(--color-stone)",
                          color: "var(--color-bone)",
                          backgroundColor: "transparent",
                          fontWeight: 500,
                        }}
                      >
                        {action.label}
                      </a>
                    )
                  )}
                </div>
              </AnimateIn>
            )}
          </div>
        </section>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-16 mb-16">
          <div className="space-y-10">
            <AnimateIn delay={100}>
              <div className="flex flex-col gap-4">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-stone)", fontWeight: 500 }}
                >
                  THE PROBLEM
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    opacity: project.flavor.bodyOpacity ?? 1,
                  }}
                >
                  {project.problem}
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="flex flex-col gap-4">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-stone)", fontWeight: 500 }}
                >
                  THE BUILD
                </span>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    opacity: project.flavor.bodyOpacity ?? 1,
                  }}
                >
                  {project.build}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Tech stack sidebar */}
          <aside className="md:sticky md:top-8 md:self-start">
            <AnimateIn delay={150}>
              <div className="flex flex-col gap-4">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-stone)", fontWeight: 500 }}
                >
                  TECH STACK
                </span>
                <div className="flex flex-col gap-4">
                  {project.techStack.map((group) => (
                    <div key={group.label}>
                      <p
                        className="font-mono text-xs uppercase tracking-widest mb-2"
                        style={{ color: "var(--color-stone)" }}
                      >
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-xs border rounded-full px-3 py-1"
                            style={{
                              borderColor: "var(--color-stone)",
                              color: "var(--color-stone)",
                              fontWeight: 400,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </aside>
        </div>

        {/* Differentiator */}
        <AnimateIn delay={250}>
          <section
            className="pt-12"
            style={{
              borderTop:
                "1px solid color-mix(in srgb, var(--color-stone) 30%, transparent)",
            }}
          >
            <div className="flex flex-col gap-4">
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--color-stone)", fontWeight: 500 }}
              >
                WHAT MAKES IT DIFFERENT
              </span>
              <p
                className="text-lg md:text-xl leading-relaxed max-w-3xl"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  opacity: project.flavor.bodyOpacity ?? 1,
                }}
              >
                {project.differentiator}
              </p>
            </div>
          </section>
        </AnimateIn>
      </main>

      <Footer />
    </div>
  );
}
