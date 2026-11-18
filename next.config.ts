import type { NextConfig } from "next";

// Project pages used to live at the site root. Keep those URLs working: full projects
// moved under /projects, everything else became one line on /lab.
const movedToProjects = ["excel-risk-check", "expert-council", "aequity", "claude-code-toolkit", "napgpt"];
const movedToLab = [
  "agentic-interview", "ai-beta-tester", "context-os", "darch", "demo-gauntlet",
  "dspy-api", "intelligence-arbitrage", "job-heist", "lawn-estimator",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...movedToProjects.map((slug) => ({ source: `/${slug}`, destination: `/projects/${slug}`, permanent: true })),
      ...movedToLab.map((slug) => ({ source: `/${slug}`, destination: `/lab#${slug}`, permanent: true })),
      // Kernel is no longer listed; send old links to the projects index.
      { source: "/kernel", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
