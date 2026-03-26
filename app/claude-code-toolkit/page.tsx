import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Claude Code Toolkit — No Mouth Labs",
  description:
    "A battle-tested set of Claude Code slash commands and agent definitions: multi-agent build pipelines, parallel task dispatch, security audits, personality-driven QA, and more.",
};

export default function Page() {
  const project = getProject("claude-code-toolkit");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
