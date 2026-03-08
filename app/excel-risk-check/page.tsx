import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Excel Risk Check — No Mouth Labs",
  description: "Excel Risk Check is an API-first spreadsheet analysis tool that evaluates structural health — circular references, formula complexity, hidden risks — before they break in production.",
};

export default function Page() {
  const project = getProject("excel-risk-check")!;
  return <ProjectPage project={project} />;
}
