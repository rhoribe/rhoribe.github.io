import { test, expect } from "@playwright/test";
test("does not expose a phone number", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).not.toContainText(
    /\+?\d{2}[ .-]?\(?\d{2}\)?[ .-]?\d{4,5}[ .-]?\d{4}/,
  );
});
