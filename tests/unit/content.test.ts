import { describe, it, expect } from "vitest";
import { canPublish } from "@/lib/content";
import { navigation } from "@/content/navigation";
import { publishableProjects } from "@/content/projects";
import { expertise } from "@/content/expertise";
describe("content", () =>
  it("keeps pending content out of public claims", () =>
    expect(canPublish({ status: "pending" })).toBe(false)));

describe("project publication", () =>
  it("omits projects and their navigation target when no project is verified", () => {
    expect(publishableProjects).toEqual([]);
    expect(navigation.some(([, href]) => href === "#projects")).toBe(false);
  }));

describe("expertise", () =>
  it("includes the requested engineering tools and operating systems without Linux in reliability", () => {
    expect(expertise).toHaveLength(8);
    expect(expertise.find((item) => item.title === "AI Engineering Tools")?.skills).toEqual([
      "Claude",
      "ChatGPT",
      "Codex",
      "Devin",
    ]);
    expect(expertise.find((item) => item.title === "Operating Systems")?.skills).toEqual([
      "Windows",
      "Linux",
      "macOS",
    ]);
    expect(
      expertise.find((item) => item.title === "Reliability and operations")?.skills,
    ).not.toContain("Linux");
  }));
