import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "aEquity — No Mouth Labs",
  description:
    "aEquity is an autonomous equity analyst that combines quantitative financial metrics, SEC filing analysis, and Claude LLM scoring to produce a 0–100 scorecard for S&P 500 companies.",
};

export default function Page() {
  const project = getProject("aequity");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
