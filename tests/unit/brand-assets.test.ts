import { describe, expect, it } from "vitest";
import { brandAssets } from "@/config/brand-assets";
import { existsSync } from "node:fs";
import { join } from "node:path";

describe("brand assets", () => {
  it("uses on-disk local SVGs and provenance whenever an asset is approved", () => {
    for (const asset of brandAssets)
      if (asset.status === "approved") {
        expect(asset.localPath).toMatch(/^\/assets\/.*\.svg$/);
        expect(asset.sourceUrl).toMatch(/^https:\/\//);
        expect(existsSync(join(process.cwd(), "public", asset.localPath!))).toBe(true);
      }
  });
  it("has an accessible fallback for every brand", () => {
    expect(brandAssets.every((asset) => asset.fallbackInitials.length > 0)).toBe(true);
  });
});
