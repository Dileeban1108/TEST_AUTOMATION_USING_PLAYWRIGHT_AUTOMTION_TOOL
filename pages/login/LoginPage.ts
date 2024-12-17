import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

   constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('input[name="useName"]');
    this.password = page.locator('input[type="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('CES-039: Invalid username or password. logon denied.');
  }

  async load() {
    await this.page.goto("/admin");
  }

  async fillUserName(userName: string) {
    await this.userName.fill(userName);
  }

  async fillPassword(password: string) {
    await this.password.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async loginErrorShouldVisible() {
    await expect(this.errorMessage).toBeVisible()
  }

  async login(userName : string , password : string ){
    await this.load();
    await this.fillPassword(password);
    await this.fillUserName(userName);
    await this.clickLoginButton();
  }


}

