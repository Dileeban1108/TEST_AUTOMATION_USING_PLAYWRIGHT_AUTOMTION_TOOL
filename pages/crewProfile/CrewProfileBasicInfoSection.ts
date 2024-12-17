import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileBasicInfoSection {
  private page: Page;
  private createProfileButton: Locator;
  private crewNameLabel : Locator;
  private crewProfileSaveButton : Locator;

  private upgradeTab : Locator;

  constructor(page: Page) {
    this.page = page;
    this.createProfileButton = page.getByRole('button', { name: 'Create New Profile' });
    this.crewNameLabel = page.locator('.crew-name');
    this.crewProfileSaveButton = page.getByRole('button', { name: 'Save Profile' });

    this.upgradeTab = page.locator('li').filter({ hasText: 'Upgrades' });
  }

  async clickCreateNewProfileButton() {
    await this.createProfileButton.click();
  }

  async isCrewNameEqual(crewName : string) {
    await expect(this.crewNameLabel).toBeVisible();
    await expect(this.crewNameLabel).toContainText(crewName);
  }

  async clickCrewProfileSaveButton() {
    await this.crewProfileSaveButton.click();
  }

  async isMessageEqualsTo(message : string) {
    await expect(this.page.locator('#toast-container')).toContainText(message); 
  }

  async clickUpgradleTab() {
    await this.upgradeTab.click();
  }

}
