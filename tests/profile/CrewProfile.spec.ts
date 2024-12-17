import { test } from '../../aeroline-fixtures.ts';

test('Test navigate to crew profile screen test', async ({ loginPage, homePage, crewProfilePage }) => {
    await loginPage.load();
    await loginPage.fillUserName("SYSTEM");
    await loginPage.fillPassword("Aer@Line@1234");
    await loginPage.clickLoginButton();

    await homePage.isWellcomeTextVisible();

    await crewProfilePage.load();
    await crewProfilePage.isCrewProfileHeaderVisible();
});


test('Test create crew profile', async ({ loginPage, homePage, crewProfilePage }) => {
    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await crewProfilePage.load();
    await crewProfilePage.isCrewProfileHeaderVisible();
    await crewProfilePage.getBasicSection().clickCreateNewProfileButton();
    await crewProfilePage.getPersonalInfoSection().fillFirstName("Vithumi");
    await crewProfilePage.getPersonalInfoSection().fillMiddleName("Sinethsa");
    await crewProfilePage.getPersonalInfoSection().fillLastName("Chandrasekara");
    await crewProfilePage.getPersonalInfoSection().fillLastNameWithInitial("Ms");
    await crewProfilePage.getPersonalInfoSection().fillDOB("17/09/2019");
    await crewProfilePage.getPersonalInfoSection().fillCallName("Vithu");
    await crewProfilePage.getPersonalInfoSection().fillReligion("Budhist");
    await crewProfilePage.getPersonalInfoSection().fillGender("Male");
    await crewProfilePage.getPersonalInfoSection().fillCivilStatus("UNMARRIED");

    await crewProfilePage.getQualificationSection().setStatus(true);
    await crewProfilePage.getQualificationSection().setTrainee(false);
    await crewProfilePage.getQualificationSection().setExperiancedPilot(true);
    await crewProfilePage.getQualificationSection().setOtherHub(true);
    await crewProfilePage.getQualificationSection().setCoverPilot(true);
    await crewProfilePage.getQualificationSection().setProbation(true);
    await crewProfilePage.getQualificationSection().setAcmi(false);
    await crewProfilePage.getQualificationSection().setIncludeForFlyingDuties(true);

    await crewProfilePage.getQualificationSection().setLvp(true);
    await crewProfilePage.getQualificationSection().setTrn(true);
    await crewProfilePage.getQualificationSection().setEtop(true);
    await crewProfilePage.getQualificationSection().setRhs(true);
    await crewProfilePage.getQualificationSection().setOperationsType("Commercial");

    await crewProfilePage.getCrewProfileCrewInfoSection().fillCrewId("20190917");
    await crewProfilePage.getCrewProfileCrewInfoSection().fillCrewTypeCode("CC");
    await crewProfilePage.getCrewProfileCrewInfoSection().fillCrewGroup("Group 1");
    await crewProfilePage.getCrewProfileCrewInfoSection().fillCrewBatch("19A");
    await crewProfilePage.getCrewProfileCrewInfoSection().fillCcccNo("CC20190917");
    await crewProfilePage.getCrewProfileCrewInfoSection().fillcaafNo("UDI20190917");
    await crewProfilePage.getCrewProfileCrewInfoSection().fillNewStafId("S20190917");

    await crewProfilePage.getCrewProfileContactDetailsSection().fillAddressLine01("No 17");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillAddressLine02("Devisiripura, Talawakalle");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillPostalCode("20200");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillProvince("Central");

    await crewProfilePage.getCrewProfileContactDetailsSection().fillResidenceNumber("05222258381");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillBussinessNumber("0569838020");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillPrimaryNumber("0713355402");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillEmail("vithumi@gmail.com");
    await crewProfilePage.getCrewProfileContactDetailsSection().fillSwapNumber("0711010100");

    await crewProfilePage.getCrewProfileNextOfKinSection().fillName("Asanka Chandrarathna");
    await crewProfilePage.getCrewProfileNextOfKinSection().fillRelationship("Mother");
    await crewProfilePage.getCrewProfileNextOfKinSection().fillTelephone("0778787871");
    await crewProfilePage.getCrewProfileNextOfKinSection().fillAddress("No 17, Devisiripura, Talawakalle");

    await crewProfilePage.getCrewProfileWebAccessSection().fillLoginId("C20190917");
    await crewProfilePage.getCrewProfileWebAccessSection().fillPassword("Cesar@1234");
    await crewProfilePage.getCrewProfileWebAccessSection().fillLConfirmPassword("Cesar@1234");

    await crewProfilePage.getCrewProfileEmploymentSecsion().fillDateOfContract("07/02/2022");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillDateOfJoin("07/01/2022");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillPassportNumber("V20190917");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillPassportIssueDate("07/02/2020");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillPassportDateOfExpiry("07/02/2029");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillCrewBase("SHJ");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillLastWorkingDate("07/02/2025");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillNumberOfALVs("30");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillNationality("Sri Lanka");
    
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillFlexiContactStart("07/02/2022");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillContactType("30D-C");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillEmployeeHub("G9");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillManagementCrewType("done Cabin Crew Manager");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillManagementStartdate("07/02/2021");
    await crewProfilePage.getCrewProfileEmploymentSecsion().fillManagementEnddate("07/02/2025");

    await crewProfilePage.getBasicSection().clickCrewProfileSaveButton();
    await crewProfilePage.getBasicSection().isMessageEqualsTo("Record(s) successfully saved.");
});


test('Test navigate to crew profile and search crew profile', async ({ loginPage, homePage, crewProfilePage }) => {
    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await crewProfilePage.load();
    await crewProfilePage.isCrewProfileHeaderVisible();
    await crewProfilePage.getSearchSection().fillCrewId("100797");
    await crewProfilePage.getSearchSection().clickSearchButton();
    await crewProfilePage.getBasicSection().isCrewNameEqual("Aakash");
    await crewProfilePage.getBasicSection().isCrewNameEqual("KHANNA");

    await crewProfilePage.getSearchSection().clickSearchBy();
    await crewProfilePage.getSearchSection().fillCrewId("105528");
    await crewProfilePage.getSearchSection().clickSearchButton();
    await crewProfilePage.getBasicSection().isCrewNameEqual("Asithanjalee");
    await crewProfilePage.getBasicSection().isCrewNameEqual("WARAHENA");

});


test('Test upgrade crew profile', async ({ loginPage, homePage, crewProfilePage }) => {
    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await crewProfilePage.load();
    await crewProfilePage.isCrewProfileHeaderVisible();
    await crewProfilePage.getSearchSection().fillCrewId("20190917");
    await crewProfilePage.getSearchSection().clickSearchButton();
    await crewProfilePage.getBasicSection().isCrewNameEqual("Vithumi");
    await crewProfilePage.getBasicSection().isCrewNameEqual("Chandrasekara");

    await crewProfilePage.getBasicSection().clickUpgradleTab();
    await crewProfilePage.getCrewProfileUpgradeTabSection().clickEditUpgradeButton();
    await crewProfilePage.getCrewProfileUpgradeTabSection().selectUpgradleCrewType("CS");
    await crewProfilePage.getCrewProfileUpgradeTabSection().fillUpgradleDate("01/08/2023");
    await crewProfilePage.getCrewProfileUpgradeTabSection().clickSaveUpdateButton();

    await crewProfilePage.getBasicSection().isMessageEqualsTo("Record(s) successfully saved.");
    
});


test('Test add airport/crew exclusions', async ({ loginPage, homePage, crewProfilePage }) => {
    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await crewProfilePage.load();
    await crewProfilePage.isCrewProfileHeaderVisible();
    await crewProfilePage.getSearchSection().fillCrewId("20190917");
    await crewProfilePage.getSearchSection().clickSearchButton();
    await crewProfilePage.getBasicSection().isCrewNameEqual("Vithumi");
    await crewProfilePage.getBasicSection().isCrewNameEqual("Chandrasekara");

    await crewProfilePage.getBasicSection().clickUpgradleTab();
    await crewProfilePage.getCrewProfileUpgradeTabSection().selectCrewExclusion('Keith ASHLEN');
    await crewProfilePage.getCrewProfileUpgradeTabSection().selectAirportExclusion('CMB');
    await crewProfilePage.getCrewProfileUpgradeTabSection().clickExclusionSaveUpdateButton();

    await crewProfilePage.getBasicSection().isMessageEqualsTo("Record(s) successfully saved.");
    
});

test('Test remove airport/crew exclusions', async ({ loginPage, homePage, crewProfilePage }) => {
    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await crewProfilePage.load();
    await crewProfilePage.isCrewProfileHeaderVisible();
    await crewProfilePage.getSearchSection().fillCrewId("20190917");
    await crewProfilePage.getSearchSection().clickSearchButton();
    await crewProfilePage.getBasicSection().isCrewNameEqual("Vithumi");
    await crewProfilePage.getBasicSection().isCrewNameEqual("Chandrasekara");

    await crewProfilePage.getBasicSection().clickUpgradleTab();
    await crewProfilePage.getCrewProfileUpgradeTabSection().selectCrewExclusion('Keith ASHLEN');
    await crewProfilePage.getCrewProfileUpgradeTabSection().selectAirportExclusion('CMB');
    await crewProfilePage.getCrewProfileUpgradeTabSection().clickExclusionSaveUpdateButton();

    await crewProfilePage.getBasicSection().isMessageEqualsTo("Record(s) successfully saved.");
    
});
