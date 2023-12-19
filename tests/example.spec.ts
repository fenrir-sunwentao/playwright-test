import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
test("has title1", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
test("has title2", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
test("has title3", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
test("has title4", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
test("has title5", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
test("has title6", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle("Vite + Vue + TS");
});
