import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileWebAccessSection {
  private page: Page;
  private loginId: Locator;
  private password: Locator;
  private confirmPassword: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.loginId = page.locator('input[ng-model="$ctrl.webAccessInfoDTO.loginId"]');
    this.password = page.locator('input[ng-model="$ctrl.webAccessInfoDTO.password"]');
    this.confirmPassword = page.locator('input[ng-model="$ctrl.webAccessInfoDTO.confirmPassword"]');
  }

  async fillLoginId(loginId: string) {
    await this.loginId.fill(loginId);
  }
  
  async fillPassword(password: string) {
    await this.password.fill(password);
  }
  
  async fillLConfirmPassword(confirmPassword: string) {
    await this.confirmPassword.fill(confirmPassword);
  }

}