import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "AI Job Heist — No Mouth Labs",
  description: "AI Job Heist is a deadpan AI heist planner that interviews you about your job and delivers a personalized blueprint for exactly how AI would take it over.",
};

export default function Page() {
  const project = getProject("job-heist")!;
  return <ProjectPage project={project} />;
}
