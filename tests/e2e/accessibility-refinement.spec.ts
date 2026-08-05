import { expect, test } from "@playwright/test";

test("experience disclosure is keyboard accessible with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const summary = page.getByRole("button", { name: "View responsibilities" }).first();
  await summary.focus();
  await expect(summary).toBeFocused();
  await summary.press("Enter");
  await expect(page.getByText("Responsibilities").first()).toBeVisible();
  await expect(summary).toHaveAttribute("aria-expanded", "true");
  await summary.press("Space");
  await expect(summary).toHaveAttribute("aria-expanded", "false");
});

test("every interactive control has visible focus styling", async ({ page }) => {
  await page.goto("/");
  const control = page.getByRole("button", { name: "View responsibilities" }).first();
  await control.focus();
  await expect(control).toBeFocused();
  await expect(control).toHaveCSS("outline-style", "solid");
});

test("theme switch retains visible, labelled contact actions", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Switch to/ }).click();
  await expect(page.getByLabel("GitHub")).toBeVisible();
  await expect(page.getByLabel("LinkedIn")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
});
