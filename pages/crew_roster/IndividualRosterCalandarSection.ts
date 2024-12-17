import { expect, type Locator, type Page } from '@playwright/test';

export class IndividualRosterCalandarSection {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickNextMonthButton() {
    await this.page.getByRole('link', { name: 'Next MONTH chevron_right' }).click();
  }

  async clickPreviousMonthButton() {
    await this.page.getByRole('link', { name: 'chevron_left PREVIOUS MONTH' }).click();
  }

  async validateDateDuration(expectedText: string) {
    await expect(this.page.locator('user-schedule-component')).toContainText(expectedText);
  }


  async assignDuty(dutyName: string, dutyDate: string, confirmmations: boolean[]) {
    await expect(this.page.getByText(dutyDate).first()).toBeVisible();

    await this.page.getByText(dutyDate).first().click();
    await this.page.getByText(dutyDate).first().click({ button: 'right' });
    await this.page.getByRole('link', { name: 'create Assign Pairing' }).click();
    await this.page.locator('.ng-pristine').first().click();
    await this.page.locator('.ng-pristine').first().fill(dutyName);

    await this.page.getByText(dutyName).click();
    await this.page.getByRole('button', { name: 'Add Pairing' }).click();

    confirmmations.forEach(async (confirmmation, index) => {
      if (confirmmation) {
        await this.page.getByRole('button', { name: 'Yes' }).click();
      }
    });
    
    await expect(this.page.getByLabel('Assign pairing successful')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Send Notification to Crew' })).toBeVisible();

    await this.page.getByRole('button', { name: 'Select a Reason for Duty' }).click();
    await this.page.getByRole('link', { name: 'Training' }).click();
    await this.page.getByRole('button', { name: 'Proceed' }).click();

  }


  async assignLeave(leaveType: string, leaveDate: string, confirmmation: boolean){
    await expect(this.page.getByText(leaveDate).first()).toBeVisible();

    await this.page.getByText(leaveDate).first().click();
    await this.page.getByText(leaveDate).first().click({ button: 'right' });

    await this.page.getByRole('link', { name: 'beach_access Assign Leave' }).hover();
    await this.page.getByRole('link', { name: 'beach_access Off' }).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();

    await expect(this.page.getByLabel('Off successfully assigned')).toBeVisible();

  }

  async unassignLeave(leaveType: string, leaveDate: string, leaveCount: number) {

    const dayLocator: Locator = this.page.locator("div:has(.day.ng-scope)").locator("span:has-text(\"" + leaveDate + "\")");
    const dutyTypeLocator: Locator = this.page.locator("td:has-text(\"" + leaveType + "\")");
    const dutyLocator: Locator = this.page.locator('div[ng-if="actSchedule.blockName"]').filter({ has: dutyTypeLocator });

    await this.page.locator("div:has(.day)")
      .filter({ has: dayLocator }).locator(dutyLocator).nth(leaveCount).click();

    await this.page.locator("div:has(.day)")
      .filter({ has: dayLocator }).locator(dutyLocator).nth(leaveCount).click({ button: "right" });

    await this.page.getByRole('link', { name: 'delete Delete' }).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
    await expect(this.page.getByLabel('Duty Removed Successfully')).toBeVisible();
    await this.page.getByRole('button', { name: 'Proceed' }).click();

  }

  async unassignDuty(dutyName: string, dutyDate: string, dutyNumer: number, confirmmations: boolean[]) {

    const dayLocator: Locator = this.page.locator("div:has(.day.ng-scope)").locator("span:has-text(\"" + dutyDate + "\")");
    const dutyTypeLocator: Locator = this.page.locator("td:has-text(\"" + dutyName + "\")");
    const dutyLocator: Locator = this.page.locator('div[ng-if="actSchedule.blockName"]').filter({ has: dutyTypeLocator });

    await this.page.locator("div:has(.day)")
      .filter({ has: dayLocator }).locator(dutyLocator).nth(dutyNumer).click();

    await this.page.locator("div:has(.day)")
      .filter({ has: dayLocator }).locator(dutyLocator).nth(dutyNumer).click({ button: "right" });

    await this.page.getByRole('link', { name: 'delete Delete' }).click();
    
    confirmmations.forEach(async (confirmmation, index) => {
      if (confirmmation) {
        await this.page.getByRole('button', { name: 'Yes' }).click();
      }
    });


    await expect(this.page.getByLabel('Duty Removed Successfully')).toBeVisible();
    await this.page.getByRole('button', { name: 'Proceed' }).click();

  }

}