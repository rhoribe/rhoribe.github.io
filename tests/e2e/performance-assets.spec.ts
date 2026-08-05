import { expect, test } from "@playwright/test";

test("brand marks are served locally with reserved dimensions", async ({ page }) => {
  await page.goto("/");
  const sources = await page
    .locator(".logo-frame img")
    .evaluateAll((images) => images.map((image) => image.getAttribute("src")));
  expect(sources.every(Boolean)).toBe(true);
  for (const box of await page.locator(".logo-frame").all())
    expect(await box.boundingBox()).not.toBeNull();
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(await image.evaluate((node) => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(
      0,
    );
  }
});
