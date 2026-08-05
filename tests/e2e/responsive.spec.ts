import { test, expect } from "@playwright/test";
for (const width of [375, 768, 1024, 1440])
  test(`no horizontal overflow in either theme at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    for (const theme of ["dark", "light"]) {
      if (theme === "light") await page.getByRole("button", { name: /Switch to/ }).click();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      ).toBeTruthy();
    }
  });
