import { test } from '../fixtures/test.fixture';

test('Scenario 4: unauthenticated redirect to login with error', async ({ page, loginPage }) => {
  await page.goto('/inventory.html');
  await loginPage.expectVisible();
  await loginPage.expectErrorMessageContains('logged in');
});
