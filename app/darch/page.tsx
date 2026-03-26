import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "dArch — No Mouth Labs",
  description:
    "dArch reconstructs architectural decision timelines from public GitHub history — surfacing what was decided, what was rejected, and the structural constraints left behind.",
};

export default function Page() {
  const project = getProject("darch")!;
  return <ProjectPage project={project} />;
}
