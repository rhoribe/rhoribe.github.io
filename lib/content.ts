export type VerificationStatus = "verified" | "pending";
export type Link = { label: string; href?: string; status: VerificationStatus };
export type Experience = { company: string; role: string; status: VerificationStatus };
export type Project = { title: string; technologies: string[]; status: VerificationStatus };
export const canPublish = <T extends { status: VerificationStatus }>(item: T) =>
  item.status === "verified";
