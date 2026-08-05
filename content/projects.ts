import type { Project } from "@/lib/content";
import { canPublish } from "@/lib/content";
export const projects: Project[] = [
  { title: "Featured project pending validation", technologies: [], status: "pending" },
];

export const publishableProjects = projects.filter(canPublish);
