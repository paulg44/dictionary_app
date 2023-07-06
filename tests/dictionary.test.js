// @ts-check
const { test, expect } = require("@playwright/test");

// Global Variables
const homePage = "http://127.0.0.1:5501/";

// Title Test
test("page title", async ({ page }) => {
  const pageTitle = "Dictionary App";
  await page.goto(homePage);

  await expect(page).toHaveTitle(pageTitle);
});

// Input Test
test("test input is correct value", async ({ page }) => {
  const input = page.getByLabel("Enter your word");
  await page.goto(homePage);
  await input.fill("word");

  await expect(input).toHaveValue("word");
});

// Check that noun shows when button clicked
test("define adds a noun", async ({ page }) => {
  const input = page.getByLabel("Enter your word");
  const defineBtn = page.getByRole("button", { name: "Define" });
  const nounDisplay = page.getByTestId("noun");

  await page.goto(homePage);
  await input.fill("word");
  await defineBtn.click();
  await page.waitForTimeout(3000);

  await expect(nounDisplay).toBeInViewport();
});

// Check that refresh button clears input
test("refresh clears input", async ({ page }) => {
  const input = page.getByLabel("Enter your word");
  const defineBtn = page.getByRole("button", { name: "Define" });
  const refreshBtn = page.getByRole("button", { name: "Refresh" });

  await page.goto(homePage);
  await input.fill("word");
  await defineBtn.click();
  await page.waitForTimeout(3000);
  await refreshBtn.click();

  await expect(input).toBeEmpty();
});
