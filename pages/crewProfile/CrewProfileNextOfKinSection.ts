import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileNextOfKinSection {
  private page: Page;
  private name: Locator;
  private relationShip : Locator;
  private telephone : Locator;
  private address : Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('input[ng-model="$ctrl.kinContactInfo.kinName"]');
    this.relationShip = page.locator('input[ng-model="$ctrl.kinContactInfo.kinRelationship"]');
    this.telephone = page.locator('input[ng-model="$ctrl.kinContactInfo.kinMobileNo"]');
    this.address = page.locator('input[ng-model="$ctrl.kinContactInfo.kinAddLine1"]');
  }

  async fillName(name: string) {
    await this.name.fill(name);
  }
  
  async fillRelationship(relationship: string) {
    await this.relationShip.fill(relationship);
  }
  
  async fillTelephone(telephone: string) {
    await this.telephone.fill(telephone);
  }

  async fillAddress(address: string) {
    await this.address.fill(address);
  }
 
}