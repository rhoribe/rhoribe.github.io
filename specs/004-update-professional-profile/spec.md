# Feature Specification: Update Professional Profile

**Feature Branch**: `004-update-professional-profile`  
**Created**: 2026-08-04  
**Status**: Draft  
**Input**: Update the existing Ricardo Horibe portfolio with approved professional profile, experience, certifications, contact, and related metadata.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Assess the current professional profile (Priority: P1)

A prospective employer can quickly understand Ricardo Horibe's current SRE Specialist positioning, seniority, cloud focus, and approved contact options.

**Why this priority**: The professional profile is the primary reason visitors use the portfolio.

**Independent Test**: Open the portfolio and verify the hero, About section, and contact section against the approved copy and links.

**Acceptance Scenarios**:

1. **Given** a visitor opens the homepage, **When** the hero is visible, **Then** it identifies Ricardo Horibe as “Site Reliability Engineer (SRE) – Specialist” and communicates over 15 years of technology experience, resilient and scalable mission-critical cloud platforms, and the approved AWS/Kubernetes/Terraform/observability/CI/CD focus.
2. **Given** a visitor reads About, **When** they review the section, **Then** they can read the two approved paragraphs, six expertise items, leadership statement, and career objective in a semantic, theme-readable layout.
3. **Given** a visitor chooses a contact method, **When** they activate email, GitHub, or LinkedIn, **Then** email uses the approved mail link and external profiles open safely with meaningful accessible names; no phone number is displayed.

---

### User Story 2 - Review verified career history (Priority: P1)

A prospective employer can browse Ricardo’s complete approved experience in chronological order, including grouped roles at the same company and enough detail to assess scope.

**Why this priority**: Accurate, readable work history establishes professional credibility.

**Independent Test**: Review every company and role at desktop and 320px widths, expand any optional details by keyboard, and compare role facts to the approved experience inventory.

**Acceptance Scenarios**:

1. **Given** a visitor views experience, **When** a company has multiple roles, **Then** its company heading appears once and each role displays its role, dates, employment type, location when supplied, work mode, summary, highlight, responsibilities, and technologies.
2. **Given** a visitor uses a narrow viewport, **When** they browse the experience timeline, **Then** it uses a readable single-column presentation without horizontal scrolling or hover-only information.
3. **Given** optional details are collapsed, **When** a keyboard user activates “Show details,” **Then** the control communicates its expanded state and the role’s primary facts, summary, and highlight remain visible before expansion.

---

### User Story 3 - Browse certifications confidently (Priority: P1)

A visitor can find approved certifications, distinguish status without relying solely on color, and inspect supplied credential IDs and skills.

**Why this priority**: The complete certification inventory substantiates Ricardo’s current and historical expertise.

**Independent Test**: Use each filter by keyboard and verify every certification card’s approved fields, dates, status, and credential-ID treatment.

**Acceptance Scenarios**:

1. **Given** a visitor opens certifications, **When** the default view appears, **Then** featured certifications are presented before other certifications and every listed certification remains reachable.
2. **Given** a visitor selects a category or status filter, **When** filtering completes, **Then** only matching cards are shown and the active filter remains clear to keyboard and assistive-technology users.
3. **Given** a card has an expiration date, **When** it is viewed, **Then** it identifies Active or Expired in text and shows the relevant date; cards with no supplied expiration state “No expiration information provided.”

### Edge Cases

- A long certification name, credential ID, list of skills, or location wraps without overflow at 320px.
- A certification lacking an expiration date is never presented as active or expired.
- A certification lacking a credential URL has no credential action, even when it has a credential ID.
- A role with no approved location omits the location rather than showing a placeholder.
- Reduced-motion users can access all content and state changes without large expansion animations.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The portfolio MUST retain its established responsive layout, light and dark themes, navigation, motion behavior, contextual iconography, static delivery, and visual design; only content-driven layout adjustments are permitted.
- **FR-002**: The hero MUST use Ricardo Horibe; “Site Reliability Engineer (SRE) – Specialist”; the approved resilient/scalable/mission-critical-cloud positioning; an over-15-years statement; and “AWS · Kubernetes · Terraform · Observability · CI/CD”. It MUST NOT add unsupported numerical claims.
- **FR-003**: The About section MUST publish exactly the approved professional description, six approved expertise areas, leadership statement, and career objective, using semantic headings and accessible icon-supported content blocks.
- **FR-004**: Experience content MUST use a typed model supporting company, role, employment type, machine-readable start/end dates, current-role flag, display duration/period label, optional location, work mode, summary, responsibilities, highlight, technologies, role icon, optional company-logo reference, and verification status.
- **FR-005**: Experience dates MUST be stored as year-month values and rendered in human-readable form. Current Zup role MUST render “Jul 2025 – Present”; no conflicting calculated duration may be displayed.
- **FR-006**: The experience inventory MUST include all roles in the approved inventory below, group Zup Innovation, iTFLEX Tecnologia, and GSP Loteamentos roles under one company heading, and avoid repeated company headers.
- **FR-007**: Each experience role MUST visibly provide role, period, employment type, applicable location, work mode, summary, highlight, readable semantic responsibility list, and wrapping technology badges with contextual icons; no detail may require pointer hover.
- **FR-008**: The certification model MUST support name, issuer, issued date, optional expiration date, status (`active`, `expired`, or `no-expiration-provided`), optional credential ID and URL, skills, brand, icon, featured flag, and display order.
- **FR-009**: The certification inventory MUST include every certification in the approved inventory below. It MUST display only supplied credential IDs, never construct credential URLs, and render “View credential” only for a valid supplied credential URL.
- **FR-010**: Certification cards MUST show name, issuer, issue date, supplied expiration date, text status, supplied credential ID, and skills. Expired credentials MUST remain respectfully presented as historical achievements.
- **FR-011**: Certifications MUST provide accessible responsive category and/or status filters covering All, Cloud, DevOps, Linux, Security, Agile and Service Management, Active, and Expired as applicable. Default ordering MUST prioritize the approved featured list.
- **FR-012**: Contact information MUST include only the approved email (`mailto:ricardohoribe1@gmail.com`), GitHub (`https://github.com/rhoribe`), and LinkedIn (`https://www.linkedin.com/in/ricardohoribe`) links with existing relevant icons, safe external-link attributes, and meaningful labels. Phone numbers and a backend contact form MUST NOT be published.
- **FR-013**: The portfolio MUST remove the specified outdated/pending-verification placeholders for this approved content and must remove malformed or duplicated source/interface phrases, including replacing “system reliability a reliability and continuity” with “system reliability and continuity.” Unrelated unverified project markers remain outside scope.
- **FR-014**: Metadata and Person structured information MUST identify Ricardo Horibe, the SRE Specialist role, AWS, Kubernetes, Terraform, DevOps, Cloud, Observability, and over 15 years of technology experience; approved existing alumni may remain. It MUST not imply employer endorsement.
- **FR-015**: The enhancement MUST preserve 320px+ usability, semantic heading hierarchy and lists, visible focus, keyboard operation, status text independent of color, selectable credential IDs, reduced-motion support, and valid static deployment.

### Approved Profile Copy

**Headline**: Site Reliability Engineer (SRE) – Specialist  
**Supporting statement**: Designing and operating resilient, scalable, and mission-critical cloud platforms.  
**Technology line**: AWS · Kubernetes · Terraform · Observability · CI/CD

**About**:

> I am a Site Reliability Engineer (SRE) with over 15 years of experience in technology, working on the design, operation, and evolution of critical, scalable, and resilient systems, across cloud environments (AWS) and enterprise infrastructure.
>
> I work at the intersection of development and operations, applying SRE, DevOps, and Infrastructure as Code (IaC) practices to reduce incidents, improve system availability, and increase overall reliability.

**Expertise**:

- Cloud architecture and operations (AWS)
- Kubernetes (EKS), containers, and orchestration
- Infrastructure as Code (Terraform)
- Observability and monitoring (Prometheus, Grafana, ELK, CloudWatch)
- CI/CD pipelines and automation
- Incident management and continuous improvement (SRE mindset)

**Leadership statement**: Strong background in technical leadership, mentoring, and process definition, always focused on operational excellence, resilience, and efficiency.  
**Career objective**: Currently seeking challenges where technology is used to scale businesses safely and reliably.

### Approved Experience Inventory

All entries below have **approved** verification status. All dates are `YYYY-MM`; display dates use abbreviated month and year.

| Company | Role | Dates / work details | Approved content |
| --- | --- | --- | --- |
| Zup Innovation | Site Reliability Engineer (SRE) – Specialist | `2025-07`–Present; Full-time; Remote | Summary: Working as a Site Reliability Engineer (SRE) – Specialist, focusing on high availability, resilience, and scalability of mission-critical cloud platforms. Responsibilities: operating/evolving large-scale AWS; managing Kubernetes (EKS); Terraform IaC; applying SRE/DevOps; observability through metrics, logs, alerts; collaborating with development teams. Highlight: Strong focus on operational resilience, efficiency, and production reliability. Technologies: AWS, Kubernetes, Amazon EKS, Terraform, Infrastructure as Code, SRE, DevOps, Observability, Metrics, Logging, Alerting. |
| Zup Innovation | Site Reliability Engineer (SRE) | `2021-09`–`2025-07`; Full-time; Remote | Summary: Worked as a Site Reliability Engineer (SRE) in large-scale enterprise environments, focusing on reliability, availability, and automation of cloud platforms. Responsibilities: AWS for business-critical systems; S3, CloudFront, EC2, RDS and managed services; containerized workloads/orchestration; DevOps/SRE; automation; preventive failure monitoring/analysis. Highlight: Direct contribution to platform stability, scalability, and SRE maturity. Technologies: AWS, Amazon S3, Amazon CloudFront, Amazon EC2, Amazon RDS, Containers, Orchestration, DevOps, SRE, Automation, Incident response, Reliability. |
| Phi | SRE / DevOps Engineer | `2020-11`–`2021-07`; Full-time; Remote | Summary: Worked as a SRE / DevOps Engineer, focusing on infrastructure automation, CI/CD pipelines, and microservices operations on AWS. Responsibilities: GitLab CI/CD and Jenkins; AWS EKS/RDS/DynamoDB microservices; EKS/EC2 Kubernetes with Rancher (RKE); Terraform; ELK/Prometheus/Grafana/CloudWatch; production stability/scalability/reliability. Highlight: Contributed to DevOps maturity and operational excellence. Technologies: AWS, Amazon EKS, Amazon RDS, Amazon DynamoDB, Kubernetes, Rancher, RKE, Terraform, GitLab CI/CD, Jenkins, ELK Stack, Prometheus, Grafana, CloudWatch, Microservices. |
| Digipix | Infrastructure Coordinator | `2018-04`–`2020-11`; Full-time; Joinville, Santa Catarina, Brazil; On-site | Summary: Worked as Infrastructure Coordinator, responsible for team management, infrastructure operations, and service availability. Responsibilities: coordinated infrastructure/support teams; Linux, networks, servers, backups and critical services; improvements to reduce downtime; operations/documentation/best practices; incident response/service stability. Highlight: Strengthened my foundation in operations, reliability, and technical leadership. Technologies: Linux, Networking, Servers, Backups, Infrastructure operations, Incident response, Service availability, Technical leadership, Documentation. |
| iTFLEX Tecnologia | Project Lead | `2015-06`–`2018-04`; Full-time; Joinville, Santa Catarina, Brazil; On-site | Summary: Worked as Project Lead, responsible for planning, coordinating, and delivering technology projects, ensuring timelines, quality, and business alignment. Responsibilities: led infrastructure/systems projects; managed schedules, risks, resources, scope; technical-team/stakeholder interface; post-delivery and continuous improvement. Highlight: Developed strong organizational, leadership, and cross-team communication skills. Technologies: Project leadership, Infrastructure, Systems, Stakeholder management, Risk management, Scope management, Continuous improvement, Linux, CentOS. |
| iTFLEX Tecnologia | IT Support Analyst | `2014-02`–`2015-06`; Full-time; Joinville, Santa Catarina, Brazil; On-site | Summary: Worked as IT Support Analyst, focusing on system stability and infrastructure support. Responsibilities: user/corporate-system support; Linux, servers and network services; environment monitoring and incident resolution; company software deployment. Highlight: Built a solid foundation in IT operations and reliability. Technologies: Linux, CentOS, Servers, Networking, Monitoring, IT support, Incident resolution, Software deployment. |
| GSP Loteamentos | IT Infrastructure Coordinator | `2012-04`–`2013-03`; Full-time; Ourinhos, São Paulo, Brazil; On-site | Summary: Worked as IT Infrastructure Coordinator, responsible for infrastructure operations, information security, and service continuity across the organization. Responsibilities: enterprise network/server operations; Linux, data networks, firewalls/connectivity; security policies, access controls/backups; availability/performance monitoring; vendor/contracts; reliability and continuity improvements; documentation, standards, training. Highlight: This role strengthened my foundation in infrastructure governance, security, and operational reliability, supporting my progression into senior infrastructure, DevOps, and SRE roles. Technologies: Linux, Networking, Firewalls, Information security, Access control, Backups, Monitoring, Vendor management, Service continuity, Infrastructure governance. |
| GSP Loteamentos | IT Support Analyst | `2011-01`–`2012-06`; Full-time; Ourinhos, São Paulo, Brazil; On-site | Summary: Worked as IT Support Analyst, focusing on network, server administration, and operational support. Responsibilities: Linux servers/network infrastructure; performance/availability monitoring; backups, antivirus/access control; technical support and IT documentation. Highlight: Established a strong technical base in infrastructure and operations. Technologies: Linux, Networking, Server administration, Monitoring, Backups, Antivirus, Access control, Documentation, IT support. |

### Approved Certification Inventory

Every entry below is approved. “No expiration information provided” is a status, not a claim of active certification. Featured certifications are: Claude Code 101; GitHub Foundations; AZ-900; AWS Developer Associate; AWS SysOps Administrator Associate; Terraform Associate; AWS Cloud Practitioner; AWS Solutions Architect Associate; GitLab Certified Associate; Certified Rancher Operator; PSM I; LPIC-1; ITIL 2011 Foundation.

| Name | Issuer | Issued / expiration / status | Credential ID | Skills |
| --- | --- | --- | --- | --- |
| Certificate of Completion: Claude Code 101 | Anthropic | 2026-06; no expiration provided | bdmxdbke7f5o | Artificial Intelligence |
| GitHub Foundations | Microsoft | 2026-02; expires 2028-02; Active | A7A6B62843CE5BB3 | GitHub, GitFlow |
| AZ-900 – Microsoft Certified: Azure Fundamentals | Microsoft | 2024-10; no expiration provided | — | DevOps, Cloud |
| AWS Certified Developer – Associate | Amazon Web Services | 2023-11; expires 2026-11; Active | — | DevOps, Cloud |
| AWS Certified SysOps Administrator – Associate | Amazon Web Services | 2023-09; expires 2026-09; Active | — | DevOps, Cloud |
| AWS Certified Cloud Practitioner | Amazon Web Services | 2022-05; expires 2026-09; Active | — | DevOps, Cloud |
| AWS Certified Solutions Architect – Associate | Amazon Web Services | 2022-05; expired 2025-05; Expired | — | Cloud |
| HashiCorp Certified: Terraform Associate (003) | HashiCorp | 2023-05; expired 2025-05; Expired | — | Cloud, Terraform |
| GitLab Certified Associate | GitLab | 2021-05; no expiration provided | — | GitLab, DevOps |
| Certified Rancher Operator: Level One | Rancher | 2020-11; no expiration provided | 85c184e768fa4d048e5fd637a2a726e0 | DevOps |
| ICSI \| CNSS Certified Network Security Specialist | DefensityOne | 2020-05; no expiration provided | — | — |
| Professional Scrum Master I – PSM I | Scrum.org | 2017-06; no expiration provided | — | Scrum |
| Digium Certified Asterisk Administrator (dCAA) | Digium | 2017-03; no expiration provided | — | Asterisk |
| SCRUM Fundamentals Certified | Vabro.ai and VMEdu.com | 2017-03; no expiration provided | 571148 | Scrum |
| Service Management Foundation Bridge based on ISO/IEC 20000 | EXIN | 2014-06; no expiration provided | 4717217.20293404 | — |
| Green IT Citizen | EXIN | 2013-04; no expiration provided | 4717217.1201443 | — |
| Information Security Foundation based on ISO/IEC 27002 | EXIN | 2013-03; no expiration provided | 4717217.1194268 | — |
| SUSE Linux Professional | SUSE | 2013-09; no expiration provided | — | — |
| SUSE Linux Administrator | SUSE | 2013-09; no expiration provided | — | — |
| LPIC-1: Linux Professional Institute | Linux Professional Institute | 2013-09; expired 2018-09; Expired | LPI000187259 | — |
| COBIT 4.1 Foundation | ISACA | 2012-12; no expiration provided | — | COBIT |
| ITIL 2011 Foundation | PeopleCert | 2012-12; no expiration provided | GR750042801RH | ITIL |
| DCTS – Novell Data Center Technical Specialist | Novell | 2013-09; no expiration provided | 10241300 | — |
| CLA – Novell Certified Linux Administrator | Novell | 2013-09; no expiration provided | CLA-LPIynhf6yp2zp | — |

### Key Entities

- **Professional profile**: Approved name, role, summary, areas of expertise, leadership/career statements, and approved public contact links.
- **Company group**: A verified employer heading with shared employment/work-mode context and one or more ordered roles.
- **Experience role**: A verified period of employment with content and display attributes, associated with one company group.
- **Certification**: An approved credential with its issuer, dates, status, optional identifier, optional valid link, skills, display ordering, and featured flag.
- **Certification filter**: An accessible category or status control that changes the visible certification subset without making cards unreachable.

### Constitution Compliance *(mandatory)*

- **Content evidence**: This specification is the explicit approved source of truth for all new professional claims. All supplied experience and certification facts are approved; no additional claims, employer endorsement, credential links, phone number, private credentials, or secret information may be published. The professional email is limited to contact actions/section.
- **Experience and quality**: Preserve 320px+ responsiveness, dark/light contrast, semantic keyboard experience, visible focus, reduced-motion handling, layout stability, concise credible copy, privacy/security, metadata, static delivery, and GitHub Pages compatibility.
- **Validation**: Validate content inventory and dates/statuses; responsive 320px and desktop layouts; theme readability; navigation; keyboard filters/expanders; status text; external links; metadata/structured data; linting, strict type checking, applicable automated tests, and production build.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the eight approved roles display their company, role, approved period, summary, highlight, at least one responsibility, and technology list, with the three multi-role companies grouped once each.
- **SC-002**: 100% of the 24 approved certifications appear with the correct issuer, issue date, status, and any explicitly supplied expiration date or credential ID; zero cards show invented credential links or status inference.
- **SC-003**: At 320px and desktop widths, all experience and certification content can be read and all filters, optional detail controls, and contact links can be completed using only a keyboard, with no horizontal overflow caused by approved content.
- **SC-004**: Visitors can identify the primary role, approved technology line, and one approved contact method within 30 seconds of opening the homepage.
- **SC-005**: 100% of approved external contact links open with safe external-link behavior, and zero phone numbers or approved-content pending-verification placeholders are publicly rendered.
- **SC-006**: The enhanced portfolio preserves successful static production export and presents readable content in both supported themes with reduced motion enabled.

## Assumptions

- Existing motion, semantic icon mappings, theme mechanics, navigation, static-export configuration, and approved alumni data will be reused rather than redesigned.
- Role and certification dates are stored in a consistent machine-readable year-month representation while localized human-readable labels use English abbreviated months, matching the supplied examples.
- Where the approved inventory gives no location or no credential URL, the corresponding UI item is omitted; no placeholder, URL derivation, or status inference is used.
- Certification categories are determined only from explicitly supplied issuer, name, or skill terms; category filtering does not alter the approved credential facts.
- Total tenure is omitted unless a future implementation can calculate it consistently from the supplied dates without conflicting with displayed periods.
