import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Lawn Estimator — No Mouth Labs",
  description: "Lawn Estimator uses satellite imagery and ML segmentation to generate instant landscaping price quotes from any address — no in-person estimate needed.",
};

export default function Page() {
  const project = getProject("lawn-estimator")!;
  return <ProjectPage project={project} />;
}
