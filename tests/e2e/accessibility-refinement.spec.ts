import { expect, test } from "@playwright/test";

test("experience disclosure is keyboard accessible with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const summary = page.getByText("View responsibilities").first();
  await summary.focus();
  await expect(summary).toBeFocused();
  await summary.press("Enter");
  await expect(page.getByText("Responsibilities").first()).toBeVisible();
});

test("theme switch retains visible, labelled contact actions", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Switch to/ }).click();
  await expect(page.getByLabel("GitHub")).toBeVisible();
  await expect(page.getByLabel("LinkedIn")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
});
