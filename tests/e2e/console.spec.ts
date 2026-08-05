import { expect, test } from "@playwright/test";

test("portfolio loads without browser console or page errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(page.locator("#experience")).toBeVisible();
  expect(errors).toEqual([]);
});
