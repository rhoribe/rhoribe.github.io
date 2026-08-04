import { expect, test } from "@playwright/test";
test("shows grouped experience and keyboard-accessible certification filters", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Zup Innovation" })).toHaveCount(1);
  await expect(page.getByText("Jul 2025 – Present")).toBeVisible();
  await page.getByText("Show details").first().press("Enter");
  await expect(page.getByText("Responsibilities").first()).toBeVisible();
  await page.getByLabel("Expired").check();
  await expect(page.getByText("Expired", { exact: true }).first()).toBeVisible();
});
test("has privacy-safe approved contacts", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Email Ricardo Horibe")).toHaveAttribute(
    "href",
    "mailto:ricardohoribe1@gmail.com",
  );
  await expect(page.getByLabel("Ricardo Horibe on GitHub")).toHaveAttribute(
    "rel",
    "noopener noreferrer",
  );
});
