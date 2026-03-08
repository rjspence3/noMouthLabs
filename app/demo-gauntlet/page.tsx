import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Demo Gauntlet — No Mouth Labs",
  description: "Demo Gauntlet is an AI-powered demo practice simulator where challenger personas fire realistic objections, technical deep-dives, and budget challenges at solution consultants.",
};

export default function Page() {
  const project = getProject("demo-gauntlet")!;
  return <ProjectPage project={project} />;
}
