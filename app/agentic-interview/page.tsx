import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Agentic Interview — No Mouth Labs",
  description:
    "Agentic Interview is an AI-powered technical interview platform with multi-agent evaluation, configurable analytical lenses, and DSPy-optimized scoring — built for organizations that want structured, traceable hiring decisions.",
};

export default function Page() {
  const project = getProject("agentic-interview")!;
  return <ProjectPage project={project} />;
}
