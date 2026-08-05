import { ScrollProgress } from "@/components/motion/scroll-progress";
import { experience } from "@/content/experience";
import { CompanyExperienceCard } from "./company-experience-card";
export function ExperienceTimeline() {
  return (
    <ScrollProgress>
      {experience.map((company) => (
        <li className="timeline-row" key={company.id}>
          <span className="timeline-marker" data-timeline-marker={company.id} aria-hidden="true" />
          <CompanyExperienceCard company={company} />
        </li>
      ))}
    </ScrollProgress>
  );
}
