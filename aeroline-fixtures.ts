import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login/LoginPage';
import { HomePage } from './pages/home/HomePage';
import { CrewProfilePage } from './pages/crewProfile/CrewProfilePage';
import { IndividualRosterPage } from './pages/crew_roster/IndividualRosterPage';

type AerolineFixtures = {
  loginPage: LoginPage;
  homePage : HomePage;
  crewProfilePage:CrewProfilePage;
  individualRosterPage : IndividualRosterPage;
};

export const test = base.extend<AerolineFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  crewProfilePage: async ({ page ,homePage}, use) => {
    const crewProfilePage = new CrewProfilePage(  homePage);
    await use(crewProfilePage);
  },

  individualRosterPage: async ({ page ,homePage}, use) => {
    const individualRosterPage = new IndividualRosterPage(  homePage);
    await use(individualRosterPage);
  },

});