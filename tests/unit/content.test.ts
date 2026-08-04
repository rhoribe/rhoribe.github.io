import { describe, it, expect } from "vitest";
import { canPublish } from "@/lib/content";
describe("content", () =>
  it("keeps pending content out of public claims", () =>
    expect(canPublish({ status: "pending" })).toBe(false)));
