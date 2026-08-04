import { describe, expect, it } from "vitest";
import { brandAssets } from "@/config/brand-assets";

describe("brand assets", () => {
  it("uses local paths whenever an asset is approved", () => {
    for (const asset of brandAssets)
      if (asset.status === "approved") expect(asset.localPath).toMatch(/^\/assets\//);
  });
  it("has an accessible fallback for every brand", () => {
    expect(brandAssets.every((asset) => asset.fallbackInitials.length > 0)).toBe(true);
  });
});
