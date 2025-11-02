import { test, expect } from '../fixtures/test.fixture';
import { userStandard } from '../data/credentials.data';

const P1 = 'Sauce Labs Backpack';
const P2 = 'Sauce Labs Bike Light';

test('Scenario 2: add 2 products then remove 1', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.expectVisible();
  await loginPage.logIn(userStandard);
  await inventoryPage.expectVisible();

  await inventoryPage.addProduct(P1);
  await inventoryPage.addProduct(P2);
  await expect.poll(async () => inventoryPage.getCartCount()).toBe(2);

  await inventoryPage.removeProduct(P2);
  await expect.poll(async () => inventoryPage.getCartCount()).toBe(1);
});
