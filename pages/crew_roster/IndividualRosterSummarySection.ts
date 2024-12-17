import { expect, type Locator, type Page } from '@playwright/test';
import { HomePage } from '../home/HomePage';

export class IndividualRosterSummarySection {
  private page: Page;

  constructor(page: Page) {
    this.page = page;

  }

  async validateCountry(expectedText: string) {
    await expect(this.page.getByText('Sri Lanka')).toBeVisible();
  }

  async validateBatch(expectedText: string) {
    await expect(this.page.getByText('Batch Number Batch')).toBeVisible();
    await expect(this.page.getByText('Batch Number Batch')).toContainText(expectedText);
  }

  async validateCrewId(expectedText: string) {
    await expect(this.page.getByText('Crew ID ' + expectedText)).toBeVisible();
  }

  async validateContact(expectedText: string) {
    await this.page.getByText('Contact ' + expectedText).click();
  }

  async validateLanguage(expectedText: string) {
    await expect(this.page.getByText('Languages ' + expectedText)).toBeVisible();
  }

  async validateFleet(expectedText: string) {
    await expect(this.page.locator('#crew_details_block')).toContainText(expectedText);
  }

  async validateExposure(expectedText: string) {
    await this.page.getByText('Exposure ' + expectedText + ' mSv').click();
  }

  async validateCrewName(expectedText: string) {
    await expect(this.page.locator('#crew_details_block')).toContainText(expectedText);
  }

  // summary 

  async validateDutyHours(expectedText: string) {
    await this.page.getByText('Duty Hours ' + expectedText).click();
  }

  async validateNightDeparture(expectedText: string) {
    await expect(this.page.getByText('Night Departure ' + expectedText)).toBeVisible();
  }

  async validateFlyingHours(expectedText: string) {
    await expect(this.page.getByText('Flying Hours ' + expectedText)).toBeVisible();
  }

  async validateTargetHours(expectedText: string) {
    await this.page.getByText('Target Hours ' + expectedText).click();
  }

  async validateCreditHours(expectedText: string) {
    await this.page.getByText('Credit Hours ' + expectedText).click();
  }

  async validateOffCount(expectedText: string) {
    await this.page.getByText('OFFs '+expectedText).click();
  }

  async validateNightCount(expectedText: string) {
    await this.page.getByText('Nights '+expectedText).click();
  }

  async validateCreditBreakdown(expectedText: string) {
    await this.page.getByLabel('Expiries\narrow_drop_up\n arrow_drop_down').locator('a').click();
    await expect(this.page.getByRole('dialog')).toContainText(expectedText);
  }
  
}