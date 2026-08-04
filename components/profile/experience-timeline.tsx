import { AppIcon } from "@/components/icons";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { experience } from "@/content/experience";
import { formatRange } from "@/lib/dates";
export function ExperienceTimeline() {
  return (
    <ScrollProgress>
      {experience.map((company) => (
        <li key={company.company}>
          <article className="card company-card">
            <h3>
              <AppIcon name="experience" /> {company.company}
            </h3>
            {company.roles.map((role) => (
              <section className="role" key={role.role}>
                <h4>
                  <AppIcon name={role.roleIcon} /> {role.role}
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
                <details>
                  <summary>Show details</summary>
                  <h5>Responsibilities</h5>
                  <ul>
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h5>Technologies</h5>
                  <ul className="badges">
                    {role.technologies.map((tag) => (
                      <li key={tag.label}>
                        <AppIcon name={tag.icon} size="compact" />
                        {tag.label}
                      </li>
                    ))}
                  </ul>
                </details>
              </section>
            ))}
          </article>
        </li>
      ))}
    </ScrollProgress>
  );
}
