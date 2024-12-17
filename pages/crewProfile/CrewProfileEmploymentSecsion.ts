import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileEmploymentSecsion {
  private page: Page;
  private dateOfContract: Locator;
  private dateOfJoin : Locator;
  private crewBase : Locator;
  private passportIssueDate : Locator;
  private passportNumber : Locator;
  private passportDateOfExpiry : Locator;
  private nationality : Locator;
  private lastWorkingDate : Locator;
  private numberOfALVs : Locator;

  private flexiContactStart : Locator;
  private contractType : Locator;
  private employeeHub : Locator;
  private managementCrewType : Locator;

  private managmentStartDate : Locator;
  private managmentEndDate : Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.dateOfContract = page.locator('input[ng-model="$ctrl.employmentInfoDTO.dateOfContract"]');
    this.dateOfJoin = page.locator('input[ng-model="$ctrl.employmentInfoDTO.dateOfJoin"]');
    this.crewBase = page.getByRole('button', { name: 'Crew Base' });
    this.passportIssueDate = page.locator('input[ng-model="$ctrl.employmentInfoDTO.passportDateOfIssue"]');
    this.passportNumber = page.locator('input[ng-model="$ctrl.employmentInfoDTO.passportNumber"]');
    this.passportDateOfExpiry = page.locator('input[ng-model="$ctrl.employmentInfoDTO.passportDateOfExpiry"]');
    this.nationality = page.locator('#nationality');
    this.lastWorkingDate = page.locator('input[ng-model="$ctrl.employmentInfoDTO.lastWorkingDay"]');
    this.numberOfALVs = page.locator('input[ng-model="$ctrl.employmentInfoDTO.alvCount"]');

    this.flexiContactStart = page.locator('input[ng-model="$ctrl.employmentInfoDTO.flexiDateOfContract"]');
    this.contractType = page.getByRole('button', { name: 'ALV-C' });
    this.employeeHub = page.getByRole('button', { name: 'Employer Hub' });
    this.managementCrewType = page.locator('select-component').filter({ hasText: 'close Select multiple items' }).getByRole('textbox');
    
    this.managmentStartDate = page.locator('input[ng-model="position.dateOfStart"]');
    this.managmentEndDate = page.locator('input[ng-model="position.dateOfEnd"]');
  
  }

  async fillDateOfContract(dateOfContract: string) {
    await this.dateOfContract.fill(dateOfContract);
  }

  async fillDateOfJoin(dateOfJoin: string) {
    await this.dateOfJoin.fill(dateOfJoin);
  }

  async fillCrewBase(crewBase: string) {
    await this.crewBase.click();
    await this.page.getByRole('link', { name: crewBase }).click();
  }

  async fillPassportIssueDate(passportIssueDate: string) {
    await this.passportIssueDate.fill(passportIssueDate);
  }

  async fillPassportNumber(passportNumber: string) {
    await this.passportNumber.fill(passportNumber);
  }

  async fillPassportDateOfExpiry(passportDateOfExpiry: string) {
    await this.passportDateOfExpiry.fill(passportDateOfExpiry);
  }

  async fillNationality(nationality: string) {
    await this.nationality.fill(nationality);
    await this.page.getByRole('link', { name: nationality }).click();
  }

  async fillLastWorkingDate(lastWorkingDate: string) {
    await this.lastWorkingDate.fill(lastWorkingDate);
  }

  async fillNumberOfALVs(numberOfALVs: string) {
    await this.numberOfALVs.fill(numberOfALVs);
  }

  async fillFlexiContactStart(flexiContactStart: string) {
    await this.flexiContactStart.fill(flexiContactStart);
  }

  async fillContactType(contactType: string) {
    await this.contractType.click();
    await this.page.getByRole('link', { name: contactType });
  }

  async fillEmployeeHub(employeeHub: string) {
    await this.employeeHub.click();
    await this.page.getByRole('link', { name: employeeHub });
  }

  async fillManagementCrewType(managementCrewType: string) {
    await this.managementCrewType.click();
    await this.page.locator('a').filter({ hasText: managementCrewType }).click();
    await this.page.getByRole('button', { name: 'Done' }).click();
  }

  async fillManagementStartdate(managmentStartDate: string) {
    await this.managmentStartDate.fill(managmentStartDate);
  }

  async fillManagementEnddate(managmentEndDate: string) {
    await this.managmentEndDate.fill(managmentEndDate);
  }
}