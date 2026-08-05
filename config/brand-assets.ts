import type { BrandAsset } from "@/types/brand-asset";

const fallback = (id: string, kind: BrandAsset["kind"], displayName: string, initials: string) =>
  ({ id, kind, displayName, fallbackInitials: initials, status: "fallback" }) satisfies BrandAsset;

export const brandAssets = [
  fallback("aws", "issuer", "Amazon Web Services", "AWS"),
  fallback("microsoft", "issuer", "Microsoft", "MS"),
  {
    id: "hashicorp",
    kind: "issuer",
    displayName: "HashiCorp",
    fallbackInitials: "HC",
    status: "approved",
    localPath: "/assets/brands/issuers/hashicorp.svg",
    sourceUrl: "https://www.hashicorp.com/brand",
  },
  {
    id: "gitlab",
    kind: "issuer",
    displayName: "GitLab",
    fallbackInitials: "GL",
    status: "approved",
    localPath: "/assets/brands/issuers/gitlab.svg",
    sourceUrl: "https://about.gitlab.com/press/press-kit/",
  },
  {
    id: "anthropic",
    kind: "issuer",
    displayName: "Anthropic",
    fallbackInitials: "AN",
    status: "approved",
    localPath: "/assets/brands/issuers/anthropic.svg",
    sourceUrl: "https://www.anthropic.com/",
  },
  {
    id: "rancher",
    kind: "issuer",
    displayName: "Rancher",
    fallbackInitials: "RA",
    status: "approved",
    localPath: "/assets/brands/issuers/rancher.svg",
    sourceUrl: "https://www.rancher.com/brand-guidelines",
  },
  fallback("scrum-org", "issuer", "Scrum.org", "SO"),
  {
    id: "suse",
    kind: "issuer",
    displayName: "SUSE",
    fallbackInitials: "SU",
    status: "approved",
    localPath: "/assets/brands/issuers/suse.svg",
    sourceUrl: "https://www.suse.com/brand/",
  },
  {
    id: "lpi",
    kind: "issuer",
    displayName: "Linux Professional Institute",
    fallbackInitials: "LPI",
    status: "approved",
    localPath: "/assets/brands/issuers/linuxprofessionalinstitute.svg",
    sourceUrl: "https://www.lpi.org/",
  },
  fallback("exin", "issuer", "EXIN", "EX"),
  fallback("peoplecert", "issuer", "PeopleCert", "PC"),
  fallback("isaca", "issuer", "ISACA", "IS"),
  fallback("digium", "issuer", "Digium", "DI"),
  fallback("novell", "issuer", "Novell", "NV"),
  fallback("vmedu", "issuer", "VMEdu", "VM"),
  fallback("defensityone", "issuer", "DefensityOne", "DO"),
] as const;

export type BrandId = (typeof brandAssets)[number]["id"];
export const getBrandAsset = (id: BrandId) => brandAssets.find((asset) => asset.id === id)!;
