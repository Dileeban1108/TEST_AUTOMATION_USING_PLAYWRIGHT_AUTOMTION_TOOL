import { expect, type Locator, type Page } from '@playwright/test';

export class CrewProfileContactDetailsSection {
  private page: Page;
  private addressLine01: Locator;
  private addressLine02 : Locator;
  private postalCode : Locator;
  private province : Locator;
  private residenceNumber : Locator;
  private bussinessNumber : Locator;
  private primaryNumber : Locator;
  private email : Locator;
  private swapNumber : Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressLine01 = page.locator('input[ng-model="$ctrl.primaryContactInfo.residenceAddLine1"]');
    this.addressLine02 = page.locator('input[ng-model="$ctrl.primaryContactInfo.residenceAddLine2"]');
    this.postalCode = page.locator('input[ng-model="$ctrl.primaryContactInfo.residencePostalCode"]');
    this.province = page.locator('input[ng-model="$ctrl.primaryContactInfo.stateProvience"]'); 
    this.residenceNumber = page.locator('input[ng-model="$ctrl.primaryContactInfo.primaryResidenceNo"]');
    this.bussinessNumber = page.locator('input[ng-model="$ctrl.primaryContactInfo.primaryBusinessNo"]');
    this.primaryNumber = page.locator('input[ng-model="$ctrl.primaryContactInfo.primaryMobileNo"]');
    this.email = page.locator('input[ng-model="$ctrl.primaryContactInfo.primaryEmail"]');
    this.swapNumber = page.locator('input[ng-model="$ctrl.primaryContactInfo.swapContact"]'); 
  }

  async fillAddressLine01(addressLine1: string) {
    await this.addressLine01.fill(addressLine1);
  }

  async fillAddressLine02(addressLine2: string) {
    await this.addressLine02.fill(addressLine2);
  }

  async fillPostalCode(postalCode: string) {
    await this.postalCode.fill(postalCode);
  }

  async fillProvince(province: string) {
    await this.province.fill(province);
  }

  async fillResidenceNumber(residenceNumber: string) {
    await this.residenceNumber.fill(residenceNumber);
  }

  async fillBussinessNumber(bussinessNumber: string) {
    await this.bussinessNumber.fill(bussinessNumber);
  }

  async fillPrimaryNumber(primaryNumber: string) {
    await this.primaryNumber.fill(primaryNumber);
  }

  async fillEmail(email: string) {
    await this.email.fill(email);
  }
  
  async fillSwapNumber(swapNumber: string) {
    await this.swapNumber.fill(swapNumber);
  }

}