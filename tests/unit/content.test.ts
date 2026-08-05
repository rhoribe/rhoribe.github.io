import { describe, it, expect } from "vitest";
import { canPublish } from "@/lib/content";
import { navigation } from "@/content/navigation";
import { publishableProjects } from "@/content/projects";
describe("content", () =>
  it("keeps pending content out of public claims", () =>
    expect(canPublish({ status: "pending" })).toBe(false)));

describe("project publication", () =>
  it("omits projects and their navigation target when no project is verified", () => {
    expect(publishableProjects).toEqual([]);
    expect(navigation.some(([, href]) => href === "#projects")).toBe(false);
  }));
