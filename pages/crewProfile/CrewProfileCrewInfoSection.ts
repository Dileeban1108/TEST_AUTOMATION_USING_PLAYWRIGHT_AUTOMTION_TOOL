import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileCrewInfoSection {
  private page: Page;
  private crewId: Locator;
  private crewTypeCode : Locator;
  private crewGroup : Locator;
  private crewBatch : Locator;
  private ccccNo : Locator;
  private caafNo : Locator;
  private newStafId : Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.crewId = page.locator('input[ng-model="$ctrl.crewInfoDTO.crewId"]');
    this.ccccNo = page.locator('input[ng-model="$ctrl.crewInfoDTO.boxNumber"]');
    this.caafNo = page.locator('input[ng-model="$ctrl.crewInfoDTO.uId"]');
    this.newStafId = page.locator('input[ng-model="$ctrl.crewInfoDTO.newStaffId"]'); 
    this.crewTypeCode = page.getByRole('button', { name: 'Crew Type' });
    this.crewGroup = page.getByRole('button', { name: 'Crew Group' });
    this.crewBatch = page.getByRole('button', { name: 'Crew Batch' });
  }

  async fillCrewId(crewId: string) {
    await this.crewId.fill(crewId);
  }
  
  async fillCcccNo(cccc: string) {
    await this.ccccNo.fill(cccc);
  }
  
  async fillcaafNo(caaf: string) {
    await this.caafNo.fill(caaf);
  }
  
  async fillNewStafId(newStafId: string) {
    await this.newStafId.fill(newStafId);
  }
  
  async fillCrewTypeCode(crewTypeCode: string) {
    await this.crewTypeCode.click();
    await this.page.getByRole('link', { name:crewTypeCode , exact: true }).click();
  }
  
  async fillCrewGroup(crewGroup: string) {
    await this.crewGroup.click();
    await this.page.getByRole('link', { name: crewGroup }).click();
  }
  
  async fillCrewBatch(crewBatch: string) {
    await this.crewBatch.click();
    await this.page.getByRole('link', { name: crewBatch }).click();
  }

}