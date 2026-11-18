import Link from "next/link";
import type { FullProject } from "@/lib/content";
import StatusLine from "./StatusLine";

export default function ProjectRow({ project }: { project: FullProject }) {
  return (
    <li
      className="py-6"
      style={{ borderTop: "1px solid color-mix(in srgb, var(--color-stone) 25%, transparent)" }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <h3 className="text-xl md:text-2xl group-hover:text-[var(--color-ember)] transition-colors" style={{ fontWeight: 700 }}>
          {project.title}
        </h3>
        <p className="mt-2 max-w-3xl leading-relaxed" style={{ color: "var(--color-bone)" }}>
          {project.summary}
        </p>
        <div className="mt-3">
          <StatusLine project={project} />
        </div>
      </Link>
    </li>
  );
}
