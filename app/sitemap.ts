import type { MetadataRoute } from "next";
import { getFullProjects, getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getFullProjects();
  const posts = getPosts();
  const newest = [projects[0]?.updated, posts[0]?.date].filter(Boolean).sort().pop();
  return [
    { url: site.url, lastModified: newest },
    { url: `${site.url}/projects`, lastModified: projects[0]?.updated },
    { url: `${site.url}/lab` },
    { url: `${site.url}/writing`, lastModified: posts[0]?.date },
    ...projects.map((project) => ({ url: `${site.url}/projects/${project.slug}`, lastModified: project.updated })),
    ...posts.map((post) => ({ url: `${site.url}/writing/${post.slug}`, lastModified: post.date })),
    { url: `${site.url}/privacy` },
  ];
}
