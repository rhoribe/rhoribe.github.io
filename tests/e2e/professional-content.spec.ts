import { expect, test } from "@playwright/test";
test("shows grouped experience and a compact certification gallery", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Zup Innovation" })).toHaveCount(1);
  await expect(page.getByText("Jul 2025 – Present")).toBeVisible();
  await page.getByText("View responsibilities").first().press("Enter");
  await expect(page.getByText("Responsibilities").first()).toBeVisible();
  await expect(page.getByText("Issued:")).toHaveCount(0);
  await expect(page.getByText("Credential ID:")).toHaveCount(0);
});
test("has privacy-safe approved contacts", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Email")).toHaveAttribute("href", "mailto:ricardohoribe1@gmail.com");
  await expect(page.getByLabel("GitHub")).toHaveAttribute("rel", "noopener noreferrer");
});
