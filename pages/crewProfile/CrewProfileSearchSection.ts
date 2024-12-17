import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileSearchSection {
  private page: Page;

  private searchPopup: Locator;
  private crewTypeSelect: Locator;
  private crewNameSelect: Locator;
  private crewId : Locator;
  private searchButton : Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.searchPopup = page.getByText('Search by'); 
    this.crewTypeSelect = page.getByRole('button', { name: 'Crew Type' });
    this.crewNameSelect = page.locator('input[name="CrewName"]');
    this.crewId = page.getByRole('textbox').nth(1);
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async clickSearchBy() {
    await this.searchPopup.click();
  }

  async isSearchButtonVisible() {
    await this.searchButton.isVisible();
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async selectCrewTypeOption(crewType : string){
    await this.crewTypeSelect.click();
    await this.page.getByRole('link', { name: crewType }).click();
  }

  async selectCrewNameOption(crewName : string){
    await this.crewNameSelect.click();
    await this.page.getByRole('link', { name: crewName }).click();
  }

  async fillCrewId(crewId : string) {
    await this.crewId.click();
    await this.crewId.fill(crewId);
  }
}