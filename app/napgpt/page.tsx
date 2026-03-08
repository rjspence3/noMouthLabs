import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "napGPT — No Mouth Labs",
  description: "napGPT is an intentionally lazy AI chatbot — a prompt engineering showcase demonstrating personality engineering and behavioral range without fine-tuning.",
};

export default function Page() {
  const project = getProject("napgpt")!;
  return <ProjectPage project={project} />;
}
