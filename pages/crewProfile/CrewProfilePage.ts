import { expect, type Locator, type Page } from '@playwright/test';
import { CrewProfileSearchSection } from '../crewProfile/CrewProfileSearchSection';
import { CrewProfileBasicInfoSection } from '../crewProfile/CrewProfileBasicInfoSection';
import { HomePage } from '../home/HomePage';
import { CrewProfilePersonalInfoSection } from './CrewProfilePersonalInfosection';
import { CrewProfileQualifactionSection } from './CrewProfileQualifactionSection';
import { CrewProfileCrewInfoSection } from './CrewProfileCrewInfoSection';
import { CrewProfileContactDetailsSection } from './CrewProfileContactDetailsSection';
import { CrewProfileNextOfKinSection } from './CrewProfileNextOfKinSection';
import { CrewProfileWebAccessSection } from './CrewProfileWebAccessSection';
import { CrewProfileEmploymentSecsion } from './CrewProfileEmploymentSecsion';
import { CrewProfileUpgradeTabSection } from './CrewProfileUpgradeTabSection';

export class CrewProfilePage {
  private page: Page;
  private homePage: HomePage;
  private crewProfileSearchSection: CrewProfileSearchSection;
  private crewProfileBasicInfoSection: CrewProfileBasicInfoSection;
  private crewProfilePageHeader: Locator;
  private crewProfilePersonalInfoSection: CrewProfilePersonalInfoSection;
  private crewProfileQualificationSection: CrewProfileQualifactionSection;
  private crewProfileCrewInfoSection: CrewProfileCrewInfoSection;
  private crewProfileContactDetailsSection: CrewProfileContactDetailsSection;
  private crewProfileNextOfKinSection : CrewProfileNextOfKinSection;
  private crewProfileWebAccessSection : CrewProfileWebAccessSection;
  private crewProfileEmploymentSecsion : CrewProfileEmploymentSecsion;
  private crewProfileUpgradeTabSection : CrewProfileUpgradeTabSection;

  constructor(homePage: HomePage) {
    this.homePage = homePage;
  }

  init() {
    this.crewProfileSearchSection = new CrewProfileSearchSection(this.page);
    this.crewProfileBasicInfoSection = new CrewProfileBasicInfoSection(this.page);
    this.crewProfilePersonalInfoSection = new CrewProfilePersonalInfoSection(this.page);
    this.crewProfileQualificationSection = new CrewProfileQualifactionSection(this.page);
    this.crewProfileCrewInfoSection = new CrewProfileCrewInfoSection(this.page);
    this.crewProfileContactDetailsSection = new CrewProfileContactDetailsSection(this.page);
    this.crewProfileNextOfKinSection = new CrewProfileNextOfKinSection(this.page);
    this.crewProfileWebAccessSection = new CrewProfileWebAccessSection(this.page)
    this.crewProfileEmploymentSecsion = new CrewProfileEmploymentSecsion(this.page);
    this.crewProfileUpgradeTabSection = new CrewProfileUpgradeTabSection(this.page);
    this.crewProfilePageHeader = this.page.getByRole('heading').getByText('Crew Profile');
  }

  async load() {
    const crewProfilePageTab = await this.homePage.gotoCrewProfilePage();
    this.page = crewProfilePageTab;
    this.init();
  }

  async isCrewProfileHeaderVisible() {
    await expect(this.crewProfilePageHeader).toBeVisible()
  }

  getSearchSection(): CrewProfileSearchSection {
    return this.crewProfileSearchSection;
  }

  getBasicSection(): CrewProfileBasicInfoSection {
    return this.crewProfileBasicInfoSection;
  }

  getPersonalInfoSection(): CrewProfilePersonalInfoSection {
    return this.crewProfilePersonalInfoSection;
  }

  getQualificationSection(): CrewProfileQualifactionSection {
    return this.crewProfileQualificationSection;
  }

  getCrewProfileCrewInfoSection(): CrewProfileCrewInfoSection {
    return this.crewProfileCrewInfoSection;
  }

  getCrewProfileContactDetailsSection(): CrewProfileContactDetailsSection {
    return this.crewProfileContactDetailsSection;
  }

  getCrewProfileNextOfKinSection(): CrewProfileNextOfKinSection {
    return this.crewProfileNextOfKinSection;
  }

  getCrewProfileWebAccessSection(): CrewProfileWebAccessSection {
    return this.crewProfileWebAccessSection;
  }

  getCrewProfileEmploymentSecsion(): CrewProfileEmploymentSecsion {
    return this.crewProfileEmploymentSecsion;
  }

  getCrewProfileUpgradeTabSection():CrewProfileUpgradeTabSection {
    return this.crewProfileUpgradeTabSection;
  }

}