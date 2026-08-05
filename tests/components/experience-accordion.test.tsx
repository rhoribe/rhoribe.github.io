import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceAccordion } from "@/components/profile/experience-accordion";

describe("ExperienceAccordion", () => {
  it("exposes a labelled independent controlled region", () => {
    render(
      <ExperienceAccordion id="role-one">
        <p>Role one content</p>
      </ExperienceAccordion>,
    );
    const button = screen.getByRole("button", { name: "View responsibilities" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-controls", "role-one-panel");
    fireEvent.click(button);
    expect(button).toHaveAccessibleName("Hide responsibilities");
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region", { name: "Responsibilities" })).toHaveTextContent(
      "Role one content",
    );
  });
});
