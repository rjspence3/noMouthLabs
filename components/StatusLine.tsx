import { formatDate, type FullProject } from "@/lib/content";

const statusLabel = { live: "Live", beta: "Beta", retired: "Retired" } as const;

export default function StatusLine({ project }: { project: FullProject }) {
  const isLive = project.status === "live";
  return (
    <p className="font-mono text-xs flex flex-wrap items-center gap-x-3 gap-y-1" style={{ color: "var(--color-stone)" }}>
      <span
        className="border rounded px-2 py-0.5"
        style={{
          borderColor: isLive ? "var(--color-ember)" : "var(--color-stone)",
          color: isLive ? "var(--color-ember)" : "var(--color-stone)",
        }}
      >
        {statusLabel[project.status]}
      </span>
      <span>Shipped {formatDate(project.shipped)}</span>
      {project.updated !== project.shipped && <span>Updated {formatDate(project.updated)}</span>}
    </p>
  );
}
