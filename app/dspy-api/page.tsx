import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "The Arbitrage Factory — No Mouth Labs",
  description:
    "The Arbitrage Factory is a serverless platform that optimizes AI agents using DSPy's MIPROv2 — finding better prompts for cheaper models so you don't have to pay GPT-4o prices for production traffic.",
};

export default function Page() {
  const project = getProject("dspy-api");
  if (!project) return null;
  return <ProjectPage project={project} />;
}
