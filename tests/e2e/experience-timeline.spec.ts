import { expect, test } from "@playwright/test";

for (const width of [375, 768, 1024, 1440]) {
  test(`all eight responsibility panels remain stable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const controls = page.getByRole("button", { name: "View responsibilities" });
    await expect(controls).toHaveCount(8);
    for (let index = 0; index < 8; index += 1) await controls.first().click();
    await expect(page.getByRole("button", { name: "Hide responsibilities" })).toHaveCount(8);
    await expect(page.locator("[data-timeline-marker]")).toHaveCount(5);
    await expect(page.locator("[data-company-card] [data-timeline-marker]")).toHaveCount(0);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBeTruthy();
  });
}

test("timeline visual regression with all panels expanded", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 1200 });
  await page.goto("/");
  const controls = page.getByRole("button", { name: "View responsibilities" });
  for (let index = 0; index < 8; index += 1) await controls.first().click();
  await expect(page.locator("#experience")).toHaveScreenshot("experience-all-open.png");
});

test("timeline reveals cards and keeps one matching active marker", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto("/");
  const cards = page.locator("[data-company-card]");
  await cards.nth(2).evaluate((card) =>
    window.scrollTo({
      top: card.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2,
    }),
  );
  await expect(page.locator(".timeline-row[data-revealed]")).not.toHaveCount(0);
  await expect(page.locator(".timeline-row[data-active]")).toHaveCount(1);
  const active = page.locator(".timeline-row[data-active]");
  await expect(active.locator("[data-timeline-marker]")).toHaveCount(1);
  await expect(active.locator("[data-timeline-rail]")).toHaveCount(1);
});

test("reduced motion keeps every experience card immediately readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("[data-company-card]")).toHaveCount(5);
  for (const card of await page.locator("[data-company-card]").all()) {
    await expect(card).toBeVisible();
    await expect(card).toHaveCSS("opacity", "1");
  }
});
