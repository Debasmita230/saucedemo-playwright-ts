import { test, expect } from '../fixtures/test.fixture';
import { userVisual } from '../data/credentials.data';

test('Scenario 3a: visual_user prints product names', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.expectVisible();
  await loginPage.logIn(userVisual);
  await inventoryPage.expectVisible();

  const names = await inventoryPage.getAllProductNames();
  console.log('Products:', names);
  expect(names.length).toBe(6);
});
