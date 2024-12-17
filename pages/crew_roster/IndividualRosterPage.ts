import { expect, type Locator, type Page } from '@playwright/test';
import { HomePage } from '../home/HomePage';
import { IndividualRosterSearchSection } from './IndividualRosterSearchSection';
import { IndividualRosterCalandarSection } from './IndividualRosterCalandarSection';
import { IndividualRosterSummarySection } from './IndividualRosterSummarySection';

export class IndividualRosterPage {
  private page: Page;
  private homePage: HomePage;

  private individualRosterSearchSection : IndividualRosterSearchSection;
  private individualRosterCalandarSection : IndividualRosterCalandarSection;
  private individualRosterSummarySection : IndividualRosterSummarySection;


  constructor(homePage: HomePage) {
    this.homePage = homePage;
  }

  init() {
    this.individualRosterSearchSection = new IndividualRosterSearchSection(this.page);
    this.individualRosterCalandarSection = new IndividualRosterCalandarSection(this.page);
    this.individualRosterSummarySection = new IndividualRosterSummarySection(this.page);
  }

  async load() {
    const rosterPage = await this.homePage.gotoIndividualRosterPage();
    this.page = rosterPage;
    this.init();
  }

  getSearchSection(): IndividualRosterSearchSection {
    return this.individualRosterSearchSection;
  }

  getIndividualRosterCalandarSection(): IndividualRosterCalandarSection {
    return this.individualRosterCalandarSection;
  }

  getIndividualRosterSummarySection(): IndividualRosterSummarySection {
    return this.individualRosterSummarySection;
  }

}