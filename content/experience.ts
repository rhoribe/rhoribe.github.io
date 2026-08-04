import type { ExperienceCompany, TechnologyTag } from "@/types/experience";
const tags = (...labels: string[]): TechnologyTag[] =>
  labels.map((label) => ({
    label,
    icon: /AWS|Cloud|Metrics|Logging|Alerting|Observability/.test(label)
      ? "cloud"
      : /Kubernetes|Containers|Rancher|RKE/.test(label)
        ? "containers"
        : /Terraform|Infrastructure|Servers|Linux/.test(label)
          ? "infrastructure"
          : /Security|Firewalls|Access|Antivirus/.test(label)
            ? "security"
            : /CI|Jenkins|DevOps|Automation/.test(label)
              ? "cicd"
              : "reliability",
  }));
export const experience: ExperienceCompany[] = [
  {
    company: "Zup Innovation",
    brand: "zup-innovation",
    employmentType: "Full-time",
    workMode: "remote",
    status: "verified",
    roles: [
      {
        role: "Site Reliability Engineer (SRE) – Specialist",
        startDate: "2025-07",
        currentRole: true,
        summary:
          "Working as a Site Reliability Engineer (SRE) – Specialist, focusing on high availability, resilience, and scalability of mission-critical cloud platforms.",
        responsibilities: [
          "Operating and evolving large-scale AWS environments",
          "Managing Kubernetes (EKS) clusters to ensure stability, performance, and reliability",
          "Implementing and maintaining Infrastructure as Code (Terraform) to promote standardization and automation",
          "Applying SRE and DevOps practices to reduce incidents and improve system reliability",
          "Monitoring and improving observability through metrics, logs, and alerting systems",
          "Collaborating closely with development teams to support architectural decisions and platform improvements",
        ],
        highlight:
          "Strong focus on operational resilience, efficiency, and production reliability.",
        technologies: tags(
          "AWS",
          "Kubernetes",
          "Amazon EKS",
          "Terraform",
          "Infrastructure as Code",
          "SRE",
          "DevOps",
          "Observability",
          "Metrics",
          "Logging",
          "Alerting",
        ),
        roleIcon: "reliability",
      },
      {
        role: "Site Reliability Engineer (SRE)",
        startDate: "2021-09",
        endDate: "2025-07",
        currentRole: false,
        summary:
          "Worked as a Site Reliability Engineer (SRE) in large-scale enterprise environments, focusing on reliability, availability, and automation of cloud platforms.",
        responsibilities: [
          "Supporting and evolving AWS environments for business-critical systems",
          "Operating distributed services using Amazon S3, CloudFront, EC2, RDS, and managed AWS services",
          "Managing containerized workloads and orchestration platforms to ensure system stability",
          "Implementing DevOps and SRE practices to continuously improve service reliability",
          "Automating operational processes to reduce manual effort and incident response time",
          "Monitoring and analyzing failures with a preventive mindset",
        ],
        highlight: "Direct contribution to platform stability, scalability, and SRE maturity.",
        technologies: tags(
          "AWS",
          "Amazon S3",
          "Amazon CloudFront",
          "Amazon EC2",
          "Amazon RDS",
          "Containers",
          "Orchestration",
          "DevOps",
          "SRE",
          "Automation",
          "Incident response",
          "Reliability",
        ),
        roleIcon: "reliability",
      },
    ],
  },
  {
    company: "PHI Pagamentos",
    brand: "phi-pagamentos",
    employmentType: "Full-time",
    workMode: "remote",
    status: "verified",
    roles: [
      {
        role: "SRE / DevOps Engineer",
        startDate: "2020-11",
        endDate: "2021-07",
        currentRole: false,
        summary:
          "Worked as a SRE / DevOps Engineer, focusing on infrastructure automation, CI/CD pipelines, and microservices operations on AWS.",
        responsibilities: [
          "Designing and maintaining CI/CD pipelines using GitLab CI/CD and Jenkins",
          "Deploying and operating microservices on AWS, using EKS, RDS, and DynamoDB",
          "Building and managing Kubernetes clusters (EKS and EC2) with Rancher (RKE)",
          "Provisioning AWS infrastructure using Terraform (Infrastructure as Code)",
          "Implementing monitoring and observability with ELK Stack, Prometheus, Grafana, and CloudWatch",
          "Ensuring stability, scalability, and reliability of production environments",
        ],
        highlight: "Contributed to DevOps maturity and operational excellence.",
        technologies: tags(
          "AWS",
          "Amazon EKS",
          "Amazon RDS",
          "Amazon DynamoDB",
          "Kubernetes",
          "Rancher",
          "RKE",
          "Terraform",
          "GitLab CI/CD",
          "Jenkins",
          "ELK Stack",
          "Prometheus",
          "Grafana",
          "CloudWatch",
          "Microservices",
        ),
        roleIcon: "automation",
      },
    ],
  },
  {
    company: "Digipix",
    brand: "digipix",
    employmentType: "Full-time",
    workMode: "on-site",
    location: "Joinville, Santa Catarina, Brazil",
    status: "verified",
    roles: [
      {
        role: "Infrastructure Coordinator",
        startDate: "2018-04",
        endDate: "2020-11",
        currentRole: false,
        summary:
          "Worked as Infrastructure Coordinator, responsible for team management, infrastructure operations, and service availability.",
        responsibilities: [
          "Coordinated infrastructure and support teams, defining priorities and operational standards",
          "Administered Linux environments, networks, servers, backups, and critical services",
          "Planned and executed infrastructure improvements to reduce downtime",
          "Defined operational processes, documentation, and IT best practices",
          "Actively supported incident response and service stability",
        ],
        highlight:
          "Strengthened my foundation in operations, reliability, and technical leadership.",
        technologies: tags(
          "Linux",
          "Networking",
          "Servers",
          "Backups",
          "Infrastructure operations",
          "Incident response",
          "Service availability",
          "Technical leadership",
          "Documentation",
        ),
        roleIcon: "infrastructure",
      },
    ],
  },
  {
    company: "iTFLEX Tecnologia",
    brand: "itflex-tecnologia",
    employmentType: "Full-time",
    workMode: "on-site",
    location: "Joinville, Santa Catarina, Brazil",
    status: "verified",
    roles: [
      {
        role: "Project Lead",
        startDate: "2015-06",
        endDate: "2018-04",
        currentRole: false,
        summary:
          "Worked as Project Lead, responsible for planning, coordinating, and delivering technology projects, ensuring timelines, quality, and business alignment.",
        responsibilities: [
          "Led infrastructure and systems projects from requirements gathering to delivery",
          "Managed schedules, risks, resources, and scope",
          "Acted as the main interface between technical teams and stakeholders",
          "Supported post-delivery operations and continuous improvement initiatives",
        ],
        highlight:
          "Developed strong organizational, leadership, and cross-team communication skills.",
        technologies: tags(
          "Project leadership",
          "Infrastructure",
          "Systems",
          "Stakeholder management",
          "Risk management",
          "Scope management",
          "Continuous improvement",
          "Linux",
          "CentOS",
        ),
        roleIcon: "leadership",
      },
      {
        role: "IT Support Analyst",
        startDate: "2014-02",
        endDate: "2015-06",
        currentRole: false,
        summary:
          "Worked as IT Support Analyst, focusing on system stability and infrastructure support.",
        responsibilities: [
          "Provided technical support to users and corporate systems",
          "Supported Linux environments, servers, and network services",
          "Monitored environments and resolved operational incidents",
          "Supported deployment of company-developed software",
        ],
        highlight: "Built a solid foundation in IT operations and reliability.",
        technologies: tags(
          "Linux",
          "CentOS",
          "Servers",
          "Networking",
          "Monitoring",
          "IT support",
          "Incident resolution",
          "Software deployment",
        ),
        roleIcon: "about",
      },
    ],
  },
  {
    company: "GSP Loteamentos",
    brand: "gsp-loteamentos",
    employmentType: "Full-time",
    workMode: "on-site",
    location: "Ourinhos, São Paulo, Brazil",
    status: "verified",
    roles: [
      {
        role: "IT Infrastructure Coordinator",
        startDate: "2012-04",
        endDate: "2013-03",
        currentRole: false,
        summary:
          "Worked as IT Infrastructure Coordinator, responsible for infrastructure operations, information security, and service continuity across the organization.",
        responsibilities: [
          "Coordinated enterprise network, server, and IT infrastructure operations",
          "Administered Linux environments, data networks, firewalls, and connectivity services",
          "Defined and enforced information security policies, access controls, and backup strategies",
          "Monitored availability and performance of servers, network links, and security systems",
          "Managed third-party vendors and service contracts",
          "Planned and supervised maintenance and improvements to ensure system reliability and continuity",
          "Oversaw IT documentation, standards, and user training initiatives",
        ],
        highlight:
          "This role strengthened my foundation in infrastructure governance, security, and operational reliability, supporting my progression into senior infrastructure, DevOps, and SRE roles.",
        technologies: tags(
          "Linux",
          "Networking",
          "Firewalls",
          "Information security",
          "Access control",
          "Backups",
          "Monitoring",
          "Vendor management",
          "Service continuity",
          "Infrastructure governance",
        ),
        roleIcon: "infrastructure",
      },
      {
        role: "IT Support Analyst",
        startDate: "2011-01",
        endDate: "2012-06",
        currentRole: false,
        summary:
          "Worked as IT Support Analyst, focusing on network, server administration, and operational support.",
        responsibilities: [
          "Administered Linux servers and network infrastructure",
          "Monitored system performance and availability",
          "Managed backups, antivirus, and access control",
          "Provided technical support and maintained IT documentation",
        ],
        highlight: "Established a strong technical base in infrastructure and operations.",
        technologies: tags(
          "Linux",
          "Networking",
          "Server administration",
          "Monitoring",
          "Backups",
          "Antivirus",
          "Access control",
          "Documentation",
          "IT support",
        ),
        roleIcon: "about",
      },
    ],
  },
];
