import { AppIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { CompanyLogo } from "@/components/ui/company-logo";
import { ExperienceAccordion } from "./experience-accordion";
import { formatRange } from "@/lib/dates";
import type { ExperienceCompany } from "@/types/experience";

export function CompanyExperienceCard({ company }: { company: ExperienceCompany }) {
  return (
    <article className="card company-card" data-company-card={company.id}>
      <header className="company-heading">
        <CompanyLogo brand={company.brand} />
        <h3>{company.company}</h3>
      </header>
      {company.roles.map((role) => (
        <section className="role" key={role.id}>
          <h4>
            <AppIcon name={role.roleIcon} size="compact" /> {role.role}
          </h4>
          <p className="metadata">
            <AppIcon name="calendar" size="compact" />
            <time dateTime={role.startDate}>
              {formatRange(role.startDate, role.endDate, role.currentRole)}
            </time>{" "}
            · {company.employmentType} · {company.workMode}
            {company.location && (
              <>
                {" "}
                · <AppIcon name="location" size="compact" />
                {company.location}
              </>
            )}
          </p>
          <p>{role.summary}</p>
          <p className="highlight">{role.highlight}</p>
          <ExperienceAccordion id={`role-${role.id}`}>
            <h5>Responsibilities</h5>
            <ul>
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h5>Technologies</h5>
            <ul className="badges">
              {role.technologies.map((tag) => (
                <Badge key={tag.label}>
                  <AppIcon name={tag.icon} size="compact" />
                  {tag.label}
                </Badge>
              ))}
            </ul>
          </ExperienceAccordion>
        </section>
      ))}
    </article>
  );
}
