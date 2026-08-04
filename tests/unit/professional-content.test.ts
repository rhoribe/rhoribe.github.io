import { describe, expect, it } from "vitest";
import { certifications } from "@/content/certifications";
import { contactLinks } from "@/content/contact";
import { experience } from "@/content/experience";
import { formatRange, isYearMonth } from "@/lib/dates";

describe("approved professional content", () => {
  it("contains five grouped companies and eight complete roles", () => {
    expect(experience).toHaveLength(5);
    expect(experience.flatMap((company) => company.roles)).toHaveLength(8);
    expect(
      experience.every((company) =>
        company.roles.every(
          (role) => role.responsibilities.length > 0 && role.technologies.length > 0,
        ),
      ),
    ).toBe(true);
  });
  it("formats machine-readable current dates without a duration", () => {
    expect(isYearMonth("2025-07")).toBe(true);
    expect(formatRange("2025-07", undefined, true)).toBe("Jul 2025 – Present");
  });
  it("has 24 certifications with explicit valid status semantics", () => {
    expect(certifications).toHaveLength(24);
    for (const certification of certifications) {
      expect(isYearMonth(certification.issuedDate)).toBe(true);
      expect(certification.status === "no-expiration-provided").toBe(!certification.expirationDate);
      if (certification.credentialId) expect(certification.credentialId.trim()).not.toBe("");
      expect(certification.credentialUrl).toBeUndefined();
    }
  });
  it("publishes only the approved contact destinations", () => {
    expect(contactLinks.map((link) => link.href)).toEqual([
      "mailto:ricardohoribe1@gmail.com",
      "https://github.com/rhoribe",
      "https://www.linkedin.com/in/ricardohoribe",
    ]);
  });
});
