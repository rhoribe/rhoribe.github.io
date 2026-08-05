"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ExperienceAccordion({ id, children }: { id: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;
  return (
    <div className="experience-accordion">
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Hide responsibilities" : "View responsibilities"}
        <ChevronDown
          aria-hidden
          className={open ? "accordion-chevron is-open" : "accordion-chevron"}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-label="Responsibilities"
        hidden={!open}
        className="accordion-panel"
      >
        {children}
      </div>
    </div>
  );
}
