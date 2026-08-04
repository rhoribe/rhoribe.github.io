import { expect, test } from "@playwright/test";

test("hero content is present and the decorative visual is hidden from assistive technology", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText("Building resilient cloud platforms")).toBeVisible();
  await expect(page.locator("svg.infra-nodes")).toHaveAttribute("aria-hidden", "true");
});

test("mobile navigation closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Toggle menu" });
  await menu.click();
  await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
});
