import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "ContextOS — No Mouth Labs",
  description:
    "ContextOS is an active memory OS for AI — a property graph and vector store that extracts entities, facts, and relationships from your AI sessions and injects relevant context into future ones.",
};

export default function Page() {
  const project = getProject("context-os")!;
  return <ProjectPage project={project} />;
}
