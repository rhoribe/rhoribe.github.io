"use client";

import { useReducedMotion } from "framer-motion";
import { useTimelineReveal } from "@/components/motion/timeline-reveal";
import { experience } from "@/content/experience";
import { CompanyExperienceCard } from "./company-experience-card";
export function ExperienceTimeline() {
  const reduced = useReducedMotion();
  const { activeId, enhanced, revealed, register } = useTimelineReveal(
    experience.map((company) => company.id),
    Boolean(reduced),
  );
  return (
    <div className="timeline-wrap">
      <ol className="timeline">
        {experience.map((company) => (
          <li
            className="timeline-row"
            data-active={activeId === company.id || undefined}
            data-enhanced={enhanced || undefined}
            data-revealed={revealed.has(company.id) || undefined}
            key={company.id}
          >
            <span
              className="timeline-marker"
              data-timeline-marker={company.id}
              aria-hidden="true"
            />
            <span
              className="timeline-rail-segment"
              data-timeline-rail={company.id}
              aria-hidden="true"
            />
            <div data-company-id={company.id} ref={register(company.id)}>
              <CompanyExperienceCard company={company} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
