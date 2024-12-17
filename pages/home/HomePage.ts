import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly wellcomeText: Locator;
  
  readonly flightMenuIcon : Locator;
  readonly flightMenuPopup : Locator;
  readonly pairingIcon : Locator;

  readonly crewIcon : Locator;
  readonly crewMenuPopup : Locator;
  readonly profilesIcon : Locator;
  readonly individualRosterIcon :Locator;

  constructor(page: Page) {
    this.page = page;

    this.flightMenuIcon = page.locator('a').filter({ hasText: 'Flights' });
    this.flightMenuPopup = page.getByRole('heading', { name: 'Flights' });
    this.pairingIcon = page.locator('li').filter({ hasText: 'Pairings' });

    this.crewIcon = page.locator('#mySidenav a').filter({ hasText: 'Crew' });
    this.crewMenuPopup = page.getByRole('heading', { name: 'Crew', exact: true })
    this.profilesIcon = page.locator('li').filter({ hasText: 'Profiles' });
    this.individualRosterIcon = page.locator('li').filter({ hasText: 'Individual Roster' });

    this.wellcomeText = page.getByRole('heading', { name: 'Welcome to Crew Management' });
  }

  async isWellcomeTextVisible() {
    await expect(this.wellcomeText).toBeVisible();
  }
  
  async gotoCrewProfilePage() : Promise<Page> {
    const pagePromise = this.page.waitForEvent('popup');
    await this.crewIcon.click();
    await this.crewMenuPopup.isVisible();
    await this.profilesIcon.click();
    return await pagePromise;
  }

  async gotoIndividualRosterPage() : Promise<Page> {
    const pagePromise = this.page.waitForEvent('popup');
    await this.crewIcon.click();
    await this.crewMenuPopup.isVisible();
    await this.individualRosterIcon.click();
    return await pagePromise;
  }

  // async gotoPairingPage() {
  //   await this.flightMenuIcon.click();
  //   await this.flightMenuPopup.isVisible();
  //   await this.pairingIcon.click();
  // }

}