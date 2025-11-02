import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.po';
import { InventoryPage } from '../pages/inventory.po';

export type TPages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<TPages>({
  loginPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login);
  },
  inventoryPage: async ({ page }, use) => {
    const inventory = new InventoryPage(page);
    await use(inventory);
  }
});

export { expect };
