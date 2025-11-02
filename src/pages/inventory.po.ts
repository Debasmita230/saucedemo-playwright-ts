import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;
  private readonly inventoryContainer: Locator;
  private readonly cartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.cartLink = page.locator('a.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  public async expectVisible(): Promise<void> {
    await expect(this.inventoryContainer).toBeVisible();
  }

  public async addProduct(productName: string): Promise<void> {
    const card = this.page.locator(`.inventory_item:has-text("${productName}")`);
    const addButton = card.getByRole('button', { name: 'Add to cart' });
    await addButton.click();
  }

  public async removeProduct(productName: string): Promise<void> {
    const card = this.page.locator(`.inventory_item:has-text("${productName}")`);
    const removeButton = card.getByRole('button', { name: 'Remove' });
    await removeButton.click();
  }

  public async getCartCount(): Promise<number> {
    const visible = await this.cartBadge.isVisible();
    if (!visible) return 0;
    const text = await this.cartBadge.innerText();
    return Number(text.trim());
  }

  public async getAllProductNames(): Promise<string[]> {
    const items = this.page.locator('.inventory_item_name');
    const count = await items.count();
    const names: string[] = [];
    for (let i = 0; i < count; i++) {
      names.push((await items.nth(i).innerText()).trim());
    }
    return names;
  }

  public async getAllProductNamePricePairs(): Promise<
    Array<{ name: string; price: number }>
  > {
    const cards = this.page.locator('.inventory_item');
    const count = await cards.count();
    const pairs: Array<{ name: string; price: number }> = [];
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      const name = (await card.locator('.inventory_item_name').innerText()).trim();
      const priceText = (await card.locator('.inventory_item_price').innerText()).trim();
      const price = Number(priceText.replace('$', ''));
      pairs.push({ name, price });
    }
    return pairs;
  }
}
