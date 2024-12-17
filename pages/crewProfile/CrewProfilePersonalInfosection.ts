import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfilePersonalInfoSection {
  private page: Page;
  private firstName: Locator;
  private middelName : Locator;
  private lastName : Locator;
  private lastNameWithInitial : Locator;
  private gender : Locator;
  private dob : Locator;
  private callName : Locator;
  private religion : Locator;
  private civilStatus : Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('input[ng-model="$ctrl.personalInfoDTO.firstName"]');
    this.middelName = page.locator('input[ng-model="$ctrl.personalInfoDTO.middleName"]');
    this.lastName = page.locator('input[ng-model="$ctrl.personalInfoDTO.lastName"]');
    this.lastNameWithInitial = page.locator('input[ng-model="$ctrl.personalInfoDTO.lastNameWithInitials"]');
    this.gender = page.getByRole('button', { name: 'Gender' });
    this.dob = page.locator('input[ng-model="$ctrl.personalInfoDTO.dob"]');
    this.callName = page.locator('input[ng-model="$ctrl.personalInfoDTO.callName"]');
    this.religion = page.locator('input[ng-model="$ctrl.personalInfoDTO.religion"]');
    this.civilStatus = page.getByRole('button', { name: 'Civil Status' });
  }

  async fillFirstName(firstName: string) {
    await this.firstName.fill(firstName);
  }
  
  async fillMiddleName(middleName: string) {
    await this.middelName.fill(middleName);
  }
  
  async fillLastName(lastName: string) {
    await this.lastName.fill(lastName);
  }
  
  async fillLastNameWithInitial(lastNameWithInitial: string) {
    await this.lastNameWithInitial.fill(lastNameWithInitial);
  }
  
  async fillDOB(dob: string) {
    await this.dob.fill(dob);
  }
  
  async fillCallName(callName: string) {
    await this.callName.fill(callName);
  }
  
  async fillReligion(religion: string) {
    await this.religion.fill(religion);
  }

  async fillGender(gender: string) {
    await this.gender.click();
    await this.page.getByRole('link', { name: gender, exact: true }).click();
  }

  async fillCivilStatus(status: string) {
    await this.civilStatus.click();
    await this.page.getByRole('link', { name: status }).click();
  }
}