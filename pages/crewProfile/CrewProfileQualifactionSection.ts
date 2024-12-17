import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileQualifactionSection {
  private page: Page;
  private active: Locator;
  private trainee: Locator;
  private experiancedPilot: Locator;
  private otherHub: Locator;
  private coverPilot: Locator;
  private probation: Locator;
  private acmi: Locator;

  private includeForFlyingDuties: Locator;
  private operationType : Locator;

  private lvp: Locator;
  private trn: Locator;
  private etop: Locator;
  private rhs: Locator;


  constructor(page: Page) {
    this.page = page;
    this.active = page.locator('label[for="test20"]');
    this.trainee = page.locator('label[for="test21"]');
    this.experiancedPilot = page.locator('label[for="test22"]');
    this.otherHub = page.locator('label[for="test24"]');
    this.coverPilot = page.locator('label[for="test25"]');
    this.probation = page.locator('label[for="test100"]');
    this.acmi = page.locator('label[for="test101"]');

    this.includeForFlyingDuties = page.locator('label[for="test35"]');
    this.operationType = page.getByRole('button', { name: 'Operational Type' });

    this.lvp = page.locator('label[for="test26"]');
    this.trn = page.locator('label[for="test27"]');
    this.etop = page.locator('label[for="test28"]');
    this.rhs = page.locator('label[for="test29"]');
  }

  async setStatus(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.active.check() : await this.active.uncheck();
  }

  async setTrainee(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.trainee.check() : await this.trainee.uncheck();
  }

  async setExperiancedPilot(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.experiancedPilot.check() : await this.experiancedPilot.uncheck();
  }

  async setOtherHub(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.otherHub.check() : await this.otherHub.uncheck();
  }

  async setCoverPilot(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.coverPilot.check() : await this.coverPilot.uncheck();
  }

  async setProbation(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.probation.check() : await this.probation.uncheck();
  }

  async setAcmi(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.acmi.check() : await this.acmi.uncheck();
  }

  async setIncludeForFlyingDuties(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.includeForFlyingDuties.check() : await this.includeForFlyingDuties.uncheck();
  }

  async setLvp(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.lvp.check() : await this.lvp.uncheck();
  }

  async setTrn(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.trn.check() : await this.trn.uncheck();
  }

  async setEtop(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.etop.check() : await this.etop.uncheck();
  }

  async setRhs(checkBoxStatus: boolean) {
    checkBoxStatus ? await this.rhs.check() : await this.rhs.uncheck();
  }

  async setOperationsType(operationType: string) {
    await this.operationType.click();
    await this.page.getByRole('link', { name: operationType }).click();
  }

}