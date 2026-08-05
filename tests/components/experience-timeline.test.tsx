import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";

describe("ExperienceTimeline", () => {
  it("renders exactly one sibling marker for each company group", () => {
    const { container } = render(<ExperienceTimeline />);
    const markers = container.querySelectorAll("[data-timeline-marker]");
    expect(markers).toHaveLength(5);
    for (const marker of markers) {
      expect(marker.closest("[data-company-card]")).toBeNull();
      expect(marker.parentElement?.querySelector("[data-company-card]")).not.toBeNull();
    }
  });
});
