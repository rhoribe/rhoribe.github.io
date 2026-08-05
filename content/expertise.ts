import type { IconName } from "@/types/icon";

export type ExpertiseCard = {
  id: string;
  title: string;
  icon: IconName;
  skills: readonly string[];
};

export const expertise: readonly ExpertiseCard[] = [
  {
    id: "ai-tools",
    title: "AI Engineering Tools",
    icon: "automation",
    skills: ["Claude", "ChatGPT", "Codex", "Devin"],
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    icon: "cloud",
    skills: ["AWS", "Microsoft Azure", "DigitalOcean"],
  },
  {
    id: "containers",
    title: "Containers and orchestration",
    icon: "containers",
    skills: ["Kubernetes", "Docker", "Amazon EKS", "Azure AKS", "Rancher (RKE)"],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    icon: "infrastructure",
    skills: ["Terraform", "Ansible", "Puppet", "AWS CloudFormation"],
  },
  {
    id: "observability",
    title: "Observability and monitoring",
    icon: "observability",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Amazon CloudWatch", "Datadog"],
  },
  {
    id: "cicd",
    title: "CI/CD and automation",
    icon: "cicd",
    skills: ["GitLab", "GitHub Actions", "Jenkins"],
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    icon: "infrastructure",
    skills: ["Windows", "Linux", "macOS"],
  },
  {
    id: "reliability",
    title: "Reliability and operations",
    icon: "reliability",
    skills: ["High Availability", "Resilience", "Incident Management"],
  },
];
