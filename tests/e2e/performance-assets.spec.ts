import { expect, test } from "@playwright/test";

test("brand marks are served locally with reserved dimensions", async ({ page }) => {
  await page.goto("/");
  const sources = await page
    .locator(".logo-frame img")
    .evaluateAll((images) => images.map((image) => image.getAttribute("src")));
  expect(
    sources.every((source) => source?.startsWith("/assets/") || source?.startsWith("/_next/")),
  ).toBe(true);
  for (const box of await page.locator(".logo-frame").all())
    expect(await box.boundingBox()).not.toBeNull();
  expect(
    await page.locator("img").evaluateAll((images) =>
      images.every((image) => {
        const asset = image as HTMLImageElement;
        return asset.complete && asset.naturalWidth > 0;
      }),
    ),
  ).toBeTruthy();
});
