import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "AI Beta Tester — No Mouth Labs",
  description:
    "AI Beta Tester runs personality-driven Claude agents — Speedrunner, Chaos Gremlin, Methodical Newcomer, and more — against any URL via Playwright MCP, generating structured bug reports from behavioral profiles that uniform testing misses.",
};

export default function Page() {
  const project = getProject("ai-beta-tester");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
