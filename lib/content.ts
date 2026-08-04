export type VerificationStatus = "verified" | "pending";
import type { IconName, TechnologyName } from "@/types/icon";
export type Link = { label: string; href?: string; status: VerificationStatus; icon?: IconName };
export type Experience = {
  company: string;
  role: string;
  status: VerificationStatus;
  roleIcon?: IconName;
};
export type Project = { title: string; technologies: TechnologyName[]; status: VerificationStatus };
export const canPublish = <T extends { status: VerificationStatus }>(item: T) =>
  item.status === "verified";
