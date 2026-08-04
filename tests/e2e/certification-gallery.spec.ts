import { expect, test } from "@playwright/test";

test("certification gallery exposes only issuer identity and title", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".certification")).toHaveCount(24);
  await expect(page.getByText("Credential ID:")).toHaveCount(0);
  await expect(page.getByText("No expiration information provided")).toHaveCount(0);
  await expect(page.getByText("View credential")).toHaveCount(0);
});
