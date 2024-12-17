import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileUpgradeTabSection {
  private page: Page;
  private editUpgradeButton: Locator;

  private upgradleCrewType: Locator;
  private upgradleDate: Locator;
  private saveUpdateButton: Locator;

  private crewExclusion: Locator;
  private airportExclusionsion: Locator;

  private exclusionUpdateButton : Locator;

  constructor(page: Page) {
    this.page = page;
    this.editUpgradeButton = page.locator('form[name="\\$ctrl\\.crewUpgradeInfo"]').getByText('mode_edit');
    this.upgradleCrewType = page.getByRole('button', { name: 'CC' });
    this.upgradleDate = page.locator('input[ng-model="$ctrl.crewUpgradePopOver.localDateTime"]');
    this.saveUpdateButton = page.getByRole('button', { name: 'Update' });
    this.crewExclusion = page.getByRole('textbox').nth(0);
    this.airportExclusionsion = page.getByRole('textbox').nth(1);
    this.exclusionUpdateButton = page.getByRole('button', { name: 'Save' });
  }

  async clickEditUpgradeButton() {
    await this.editUpgradeButton.click();
  }

  async selectUpgradleCrewType(crewType: string) {
    await this.upgradleCrewType.click();
    await this.page.getByRole('link', { name: crewType }).click();
  }

  async fillUpgradleDate(date: string) {
    await this.upgradleDate.fill(date);
  }

  async clickSaveUpdateButton() {
    await this.saveUpdateButton.click();
  }

  async selectCrewExclusion(crewName : string) {
    await this.crewExclusion.click();
    await this.page.getByText('done ' +crewName).click();
    await this.page.getByRole('button', { name: 'Done' }).click();
  }


  async selectAirportExclusion(airport : string) {
    await this.airportExclusionsion.click();
    await this.page.getByText('done ' +airport).click();
    await this.page.getByRole('button', { name: 'Done' }).click();
  }

  async clickExclusionSaveUpdateButton() {
    await this.exclusionUpdateButton.click();
  }
}

