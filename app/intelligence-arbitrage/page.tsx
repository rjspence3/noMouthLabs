import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Intelligence Arbitrage — No Mouth Labs",
  description:
    "Intelligence Arbitrage tests whether DSPy's MIPROv2 optimization pipeline can close the performance gap between local open-weight models and frontier API models across 9 cognitive task domains.",
};

export default function Page() {
  const project = getProject("intelligence-arbitrage");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
