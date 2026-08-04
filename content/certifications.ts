import type { Certification, CertificationCategory } from "@/types/certification";
const c = (
  name: string,
  issuer: string,
  issuedDate: string,
  status: Certification["status"],
  categories: CertificationCategory[],
  extra: Partial<Certification> = {},
) =>
  ({
    name,
    issuer,
    issuerBrand: issuerBrand(issuer),
    issuedDate,
    status,
    categories,
    featured: false,
    displayOrder: 0,
    ...extra,
  }) satisfies Certification;
const issuerBrand = (issuer: string): Certification["issuerBrand"] => {
  if (issuer === "Amazon Web Services") return "aws";
  if (issuer === "Microsoft") return "microsoft";
  if (issuer === "Linux Professional Institute") return "lpi";
  if (issuer.includes("VMEdu")) return "vmedu";
  const ids = [
    "Anthropic",
    "HashiCorp",
    "GitLab",
    "Rancher",
    "DefensityOne",
    "Scrum.org",
    "Digium",
    "EXIN",
    "SUSE",
    "ISACA",
    "PeopleCert",
    "Novell",
  ] as const;
  const match = ids.find((value) => value === issuer);
  return (
    match ? match.toLowerCase().replace(".", "-") : "defensityone"
  ) as Certification["issuerBrand"];
};
export const certifications: Certification[] = [
  c(
    "Certificate of Completion: Claude Code 101",
    "Anthropic",
    "2026-06",
    "no-expiration-provided",
    ["artificial-intelligence"],
    {
      credentialId: "bdmxdbke7f5o",
      skills: ["Artificial Intelligence"],
      featured: true,
      displayOrder: 1,
    },
  ),
  c("GitHub Foundations", "Microsoft", "2026-02", "active", ["devops-cicd"], {
    expirationDate: "2028-02",
    credentialId: "A7A6B62843CE5BB3",
    skills: ["GitHub", "GitFlow"],
    featured: true,
    displayOrder: 2,
  }),
  c(
    "AZ-900 – Microsoft Certified: Azure Fundamentals",
    "Microsoft",
    "2024-10",
    "no-expiration-provided",
    ["azure", "aws-cloud"],
    { skills: ["DevOps", "Cloud"], featured: true, displayOrder: 3 },
  ),
  c(
    "AWS Certified Developer – Associate",
    "Amazon Web Services",
    "2023-11",
    "active",
    ["aws-cloud", "devops-cicd"],
    { expirationDate: "2026-11", skills: ["DevOps", "Cloud"], featured: true, displayOrder: 4 },
  ),
  c(
    "AWS Certified SysOps Administrator – Associate",
    "Amazon Web Services",
    "2023-09",
    "active",
    ["aws-cloud", "devops-cicd"],
    { expirationDate: "2026-09", skills: ["DevOps", "Cloud"], featured: true, displayOrder: 5 },
  ),
  c(
    "AWS Certified Cloud Practitioner",
    "Amazon Web Services",
    "2022-05",
    "active",
    ["aws-cloud", "devops-cicd"],
    { expirationDate: "2026-09", skills: ["DevOps", "Cloud"], featured: true, displayOrder: 7 },
  ),
  c(
    "AWS Certified Solutions Architect – Associate",
    "Amazon Web Services",
    "2022-05",
    "expired",
    ["aws-cloud"],
    { expirationDate: "2025-05", skills: ["Cloud"], featured: true, displayOrder: 8 },
  ),
  c(
    "HashiCorp Certified: Terraform Associate (003)",
    "HashiCorp",
    "2023-05",
    "expired",
    ["infrastructure-as-code", "aws-cloud"],
    { expirationDate: "2025-05", skills: ["Cloud", "Terraform"], featured: true, displayOrder: 6 },
  ),
  c("GitLab Certified Associate", "GitLab", "2021-05", "no-expiration-provided", ["devops-cicd"], {
    skills: ["GitLab", "DevOps"],
    featured: true,
    displayOrder: 9,
  }),
  c(
    "Certified Rancher Operator: Level One",
    "Rancher",
    "2020-11",
    "no-expiration-provided",
    ["devops-cicd"],
    {
      credentialId: "85c184e768fa4d048e5fd637a2a726e0",
      skills: ["DevOps"],
      featured: true,
      displayOrder: 10,
    },
  ),
  c(
    "ICSI | CNSS Certified Network Security Specialist",
    "DefensityOne",
    "2020-05",
    "no-expiration-provided",
    ["network-security"],
    { displayOrder: 14 },
  ),
  c(
    "Professional Scrum Master I – PSM I",
    "Scrum.org",
    "2017-06",
    "no-expiration-provided",
    ["agile"],
    { skills: ["Scrum"], featured: true, displayOrder: 11 },
  ),
  c(
    "Digium Certified Asterisk Administrator (dCAA)",
    "Digium",
    "2017-03",
    "no-expiration-provided",
    ["communications"],
    { skills: ["Asterisk"], displayOrder: 15 },
  ),
  c(
    "SCRUM Fundamentals Certified",
    "Vabro.ai and VMEdu.com",
    "2017-03",
    "no-expiration-provided",
    ["agile"],
    { credentialId: "571148", skills: ["Scrum"], displayOrder: 16 },
  ),
  c(
    "Service Management Foundation Bridge based on ISO/IEC 20000",
    "EXIN",
    "2014-06",
    "no-expiration-provided",
    ["service-management"],
    { credentialId: "4717217.20293404", displayOrder: 17 },
  ),
  c("Green IT Citizen", "EXIN", "2013-04", "no-expiration-provided", ["governance"], {
    credentialId: "4717217.1201443",
    displayOrder: 18,
  }),
  c(
    "Information Security Foundation based on ISO/IEC 27002",
    "EXIN",
    "2013-03",
    "no-expiration-provided",
    ["network-security"],
    { credentialId: "4717217.1194268", displayOrder: 19 },
  ),
  c("SUSE Linux Professional", "SUSE", "2013-09", "no-expiration-provided", ["linux"], {
    displayOrder: 20,
  }),
  c("SUSE Linux Administrator", "SUSE", "2013-09", "no-expiration-provided", ["linux"], {
    displayOrder: 21,
  }),
  c(
    "LPIC-1: Linux Professional Institute",
    "Linux Professional Institute",
    "2013-09",
    "expired",
    ["linux"],
    { expirationDate: "2018-09", credentialId: "LPI000187259", featured: true, displayOrder: 12 },
  ),
  c("COBIT 4.1 Foundation", "ISACA", "2012-12", "no-expiration-provided", ["governance"], {
    skills: ["COBIT"],
    displayOrder: 22,
  }),
  c(
    "ITIL 2011 Foundation",
    "PeopleCert",
    "2012-12",
    "no-expiration-provided",
    ["service-management"],
    { credentialId: "GR750042801RH", skills: ["ITIL"], featured: true, displayOrder: 13 },
  ),
  c(
    "DCTS – Novell Data Center Technical Specialist",
    "Novell",
    "2013-09",
    "no-expiration-provided",
    ["linux"],
    { credentialId: "10241300", displayOrder: 23 },
  ),
  c(
    "CLA – Novell Certified Linux Administrator",
    "Novell",
    "2013-09",
    "no-expiration-provided",
    ["linux"],
    { credentialId: "CLA-LPIynhf6yp2zp", displayOrder: 24 },
  ),
].sort((a, b) => Number(b.featured) - Number(a.featured) || a.displayOrder - b.displayOrder);
