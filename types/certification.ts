import type { IconName } from "@/types/icon";
export type CertificationStatus = "active" | "expired" | "no-expiration-provided";
export type CertificationCategory =
  | "artificial-intelligence"
  | "aws-cloud"
  | "azure"
  | "infrastructure-as-code"
  | "devops-cicd"
  | "linux"
  | "network-security"
  | "agile"
  | "service-management"
  | "governance"
  | "communications";
export type Certification = {
  name: string;
  issuer: string;
  issuedDate: string;
  expirationDate?: string;
  status: CertificationStatus;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  categories: CertificationCategory[];
  icon?: IconName;
  featured: boolean;
  displayOrder: number;
};
