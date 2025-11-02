import { expect, Page } from '@playwright/test';
import { TCredentials } from '../types/credentials';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput;
  private readonly passwordInput;
  private readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  public async goto(): Promise<void> {
    await this.page.goto('/');
  }

  public async expectVisible(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  public async logIn(creds: TCredentials): Promise<void> {
    await this.usernameInput.fill(creds.username);
    await this.passwordInput.fill(creds.password);
    await this.loginButton.click();
  }

  public async expectErrorMessageContains(fragment: string): Promise<void> {
    const error = this.page.locator('[data-test="error"], h3[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText(fragment);
  }
}
