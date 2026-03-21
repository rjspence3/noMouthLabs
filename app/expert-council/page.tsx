import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Expert Council — No Mouth Labs",
  description: "Expert Council assembles a panel of AI personas to debate your question in real-time, preserving disagreement and trade-offs instead of flattening them into a single answer.",
};

export default function Page() {
  const project = getProject("expert-council");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
