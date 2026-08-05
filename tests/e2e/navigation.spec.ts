import { test, expect } from "@playwright/test";
test("skip link reaches main", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("Expertise navigation reaches a visible Core Expertise heading", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto("/");
  await page.getByRole("link", { name: "Expertise" }).click();
  await expect(page).toHaveURL(/#expertise$/);
  const heading = page.getByRole("heading", { name: "Core expertise" });
  await expect(heading).toBeVisible();
  const positions = await page.evaluate(() => {
    const heading = document.querySelector("#expertise-title")!.getBoundingClientRect();
    const header = document.querySelector(".header")!.getBoundingClientRect();
    return { headingTop: heading.top, headerBottom: header.bottom };
  });
  expect(positions.headingTop).toBeGreaterThanOrEqual(positions.headerBottom);
});
