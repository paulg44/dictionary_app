// @ts-check
const { test, expect } = require('@playwright/test');

// Global Variables
const homePage = 'http://127.0.0.1:5501/';

// Title Test
test('page title', async ({ page }) => {
  const pageTitle = 'Dictionary App';
  await page.goto(homePage);

  await expect(page).toHaveTitle(pageTitle);
});

// Input Test
test('test input is correct value', async ({ page }) => {
  const input = page.getByLabel('Enter your word');

  await page.goto(homePage);
  await input.fill('word');

  await expect(input).toHaveValue('word');
});

// Define button sends request to API
test('define sends request', async ({ page }) => {
  const input = page.getByLabel('Enter your word');
});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
// test('test input is correct value', async ({ page }) => {});
