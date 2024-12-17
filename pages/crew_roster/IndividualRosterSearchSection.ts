import { expect, type Locator, type Page } from '@playwright/test';
import { HomePage } from '../home/HomePage';

export class IndividualRosterSearchSection {
  private page: Page;

  private fromDate : Locator;
  private todate : Locator;
  private base : Locator;
  private filterBy : Locator;
  private crewType : Locator;
  private crewName : Locator;
  private crewId : Locator;
  private searchButton : Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.fromDate = page.locator('input[ng-model="crewScheduleSearch.model.fromDate"]');
    this.todate = page.locator('input[ng-model="crewScheduleSearch.model.toDate"]');
    this.crewId =  page.locator('input[ng-model="crewScheduleSearch.model.crewID"]');
    this.crewType = page.getByRole('button', { name: 'Crew Type' });
    this.crewName = page.locator('input[name="CrewName"]');
    this.searchButton =  page.getByRole('button', { name: 'Search' });
  }

  async fillFromDate(fromDate: string) {
    await this.fromDate.fill(fromDate);
  }
  
  async fillToDate(toDate: string) {
    await this.todate.fill(toDate);
  }
  
  async selectCrewType(crewType: string) {
    await this.crewType.click();
    await this.page.getByRole('link', { name: crewType}).click();
  }
  
  async fillCrewId(crewId: string) {
    await this.crewId.fill(crewId);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }
  async selectCrewName(expectedText: string) {
    await this.crewName.click();
    await this.crewName.fill(expectedText);
    await this.page.getByRole('link', { name: expectedText}).click();
  }

}