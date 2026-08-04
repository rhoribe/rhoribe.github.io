import type { IconName } from "@/types/icon";

export type WorkMode = "remote" | "hybrid" | "on-site";
export type TechnologyTag = { label: string; icon: IconName };
export type ExperienceRole = {
  role: string;
  startDate: string;
  endDate?: string;
  currentRole: boolean;
  summary: string;
  responsibilities: string[];
  highlight: string;
  technologies: TechnologyTag[];
  roleIcon: IconName;
};
export type ExperienceCompany = {
  company: string;
  employmentType: string;
  workMode: WorkMode;
  location?: string;
  roles: ExperienceRole[];
  status: "verified";
};
