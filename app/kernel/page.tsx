import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Kernel — No Mouth Labs",
  description: "Kernel is an AI orchestration system that lives in Slack, spawning autonomous Claude Code workers and maintaining operational memory across days and weeks.",
};

export default function Page() {
  const project = getProject("kernel")!;
  return <ProjectPage project={project} />;
}
