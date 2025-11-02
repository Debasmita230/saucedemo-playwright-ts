import { test, expect } from '../fixtures/test.fixture';
import { userVisual } from '../data/credentials.data';

function formatPrice(price: number): string {
  return `${price.toFixed(2)}$`;
}

test('Scenario 3b: visual_user prints name and price', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.logIn(userVisual);
  await inventoryPage.expectVisible();

  const pairs = await inventoryPage.getAllProductNamePricePairs();
  for (const { name, price } of pairs) {
    console.log(`${name} costs ${formatPrice(price)}`);
  }
  expect(pairs.length).toBeGreaterThan(0);
});
