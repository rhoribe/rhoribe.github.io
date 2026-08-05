import { test, expect } from "@playwright/test";
for (const width of [375, 768, 1024, 1440])
  test(`no horizontal overflow in the permanent dark theme at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBeTruthy();
    await expect(page.getByRole("button", { name: /Switch to/ })).toHaveCount(0);
  });
