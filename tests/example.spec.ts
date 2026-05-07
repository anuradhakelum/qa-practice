import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homePage';

let homepage: Homepage;

test.beforeEach(async ({page}) => {
  homepage = new Homepage(page);
  await homepage.goto();
});

test('has title', async () => {
  await expect(homepage.page).toHaveTitle("Home Page | QA Practice");
});

test('has icon', async () => {
  await expect(homepage.logo).toBeVisible();
});
