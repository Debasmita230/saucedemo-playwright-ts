import { test, expect } from '../fixtures/test.fixture';
import { userStandard } from '../data/credentials.data';

const PRODUCT = 'Sauce Labs Backpack';

test('Scenario 1: login and add 1 product to cart', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.logIn(userStandard);
  await inventoryPage.expectVisible();

  await inventoryPage.addProduct(PRODUCT);
  await expect.poll(async () => inventoryPage.getCartCount()).toBe(1);
});
