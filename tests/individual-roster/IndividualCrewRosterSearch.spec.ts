
import { test } from '../../aeroline-fixtures.ts';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

test('Test load individual roster by crew id', async ({ loginPage, homePage, individualRosterPage }) => {

    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await individualRosterPage.load();
    await individualRosterPage.getSearchSection().fillFromDate("01/02/2024");
    await individualRosterPage.getSearchSection().fillToDate("29/02/2024");
    await individualRosterPage.getSearchSection().fillCrewId("105528");
    await individualRosterPage.getSearchSection().clickSearchButton();

    await individualRosterPage.getIndividualRosterSummarySection().validateCountry("Sri Lanka");
    await individualRosterPage.getIndividualRosterSummarySection().validateBatch("Batch 205");
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewId("105528");
    await individualRosterPage.getIndividualRosterSummarySection().validateContact("00971111111111");
    await individualRosterPage.getIndividualRosterSummarySection().validateLanguage("SIN");
    await individualRosterPage.getIndividualRosterSummarySection().validateExposure("0.133");
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewName('Asithanjalee WARAHENA DE ALWIS');
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewName('A320');
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewName('A321');

    await individualRosterPage.getIndividualRosterSummarySection().validateDutyHours("120.53");
    await individualRosterPage.getIndividualRosterSummarySection().validateNightDeparture("6");
    await individualRosterPage.getIndividualRosterSummarySection().validateFlyingHours("81.09");
    await individualRosterPage.getIndividualRosterSummarySection().validateTargetHours("63.56");
    await individualRosterPage.getIndividualRosterSummarySection().validateCreditHours("98.45");
    await individualRosterPage.getIndividualRosterSummarySection().validateOffCount("12");
    await individualRosterPage.getIndividualRosterSummarySection().validateNightCount('9');

    // await crewProfilePage.isCrewProfileHeaderVisible();
});



test('Test load individual roster by crew name', async ({ loginPage, homePage, individualRosterPage }) => {

    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await individualRosterPage.load();
    await individualRosterPage.getSearchSection().fillFromDate("01/01/2024");
    await individualRosterPage.getSearchSection().fillToDate("31/1/2024");
    await individualRosterPage.getSearchSection().selectCrewType("Cabin Crew");
    await individualRosterPage.getSearchSection().selectCrewName("Asithanjalee WARAHENA DE ALWIS");
    await individualRosterPage.getSearchSection().clickSearchButton();

    await individualRosterPage.getIndividualRosterSummarySection().validateCountry("Sri Lanka");
    await individualRosterPage.getIndividualRosterSummarySection().validateBatch("Batch 205");
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewId("105528");
    await individualRosterPage.getIndividualRosterSummarySection().validateContact("00971111111111");
    await individualRosterPage.getIndividualRosterSummarySection().validateLanguage("SIN");
    await individualRosterPage.getIndividualRosterSummarySection().validateExposure("0.0686");
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewName('Asithanjalee WARAHENA DE ALWIS');
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewName('A320');
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewName('A321');

    await individualRosterPage.getIndividualRosterSummarySection().validateDutyHours("79.02");
    await individualRosterPage.getIndividualRosterSummarySection().validateNightDeparture("4");
    await individualRosterPage.getIndividualRosterSummarySection().validateFlyingHours("59.07");
    await individualRosterPage.getIndividualRosterSummarySection().validateTargetHours("62.18");
    await individualRosterPage.getIndividualRosterSummarySection().validateCreditHours("84.00");
    await individualRosterPage.getIndividualRosterSummarySection().validateOffCount("6");
    await individualRosterPage.getIndividualRosterSummarySection().validateNightCount('3');

});


test('Test load individual roster credi hours ', async ({ loginPage, homePage, individualRosterPage }) => {

    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await individualRosterPage.load();
    await individualRosterPage.getSearchSection().fillFromDate("01/01/2024");
    await individualRosterPage.getSearchSection().fillToDate("31/1/2024");
    await individualRosterPage.getSearchSection().selectCrewType("Cabin Crew");
    await individualRosterPage.getSearchSection().selectCrewName("Asithanjalee WARAHENA DE ALWIS");
    await individualRosterPage.getSearchSection().clickSearchButton();
    await individualRosterPage.getIndividualRosterSummarySection().validateCreditBreakdown("84.00");

});

test('Test load individual roster check next and previous months  ', async ({ loginPage, homePage, individualRosterPage }) => {

    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await individualRosterPage.load();
    await individualRosterPage.getSearchSection().fillFromDate("01/02/2024");
    await individualRosterPage.getSearchSection().fillToDate("29/02/2024");
    await individualRosterPage.getSearchSection().fillCrewId("105528");
    await individualRosterPage.getSearchSection().clickSearchButton();

    await individualRosterPage.getIndividualRosterCalandarSection().clickNextMonthButton();
    await individualRosterPage.getIndividualRosterCalandarSection().validateDateDuration('01/03/2024');
    await individualRosterPage.getIndividualRosterCalandarSection().validateDateDuration('31/03/2024');

    await individualRosterPage.getIndividualRosterCalandarSection().clickPreviousMonthButton();
    await individualRosterPage.getIndividualRosterCalandarSection().validateDateDuration('01/02/2024');
    await individualRosterPage.getIndividualRosterCalandarSection().validateDateDuration('29/02/2024');

});


test('Test unassign and assing patterns in individual roster', async ({ loginPage, homePage, individualRosterPage }) => {

    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await individualRosterPage.load();
    await individualRosterPage.getSearchSection().fillFromDate("01/02/2024");
    await individualRosterPage.getSearchSection().fillToDate("29/02/2024");
    await individualRosterPage.getSearchSection().fillCrewId("105528");
    await individualRosterPage.getSearchSection().clickSearchButton();

    await individualRosterPage.getIndividualRosterSummarySection().validateCountry("Sri Lanka");
    await individualRosterPage.getIndividualRosterSummarySection().validateBatch("Batch 205");
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewId("105528");
    await individualRosterPage.getIndividualRosterSummarySection().validateContact("00971111111111");
    await individualRosterPage.getIndividualRosterSummarySection().validateLanguage("SIN");

    await individualRosterPage.getIndividualRosterCalandarSection().validateDateDuration('29/02/2024');

    await individualRosterPage.getIndividualRosterCalandarSection().unassignDuty('CMB', "06/02/2024", 1, [true]);
    await individualRosterPage.getIndividualRosterCalandarSection().assignDuty('CMB-04:00-AUTO', '06/02/', [false]);

    await individualRosterPage.getIndividualRosterCalandarSection().unassignDuty('SLL', "11/02/2024", 1, [true]);
    await individualRosterPage.getIndividualRosterCalandarSection().assignDuty('SLL-12:25-AUTO', '11/02/', [false]);

    await individualRosterPage.getIndividualRosterCalandarSection().unassignDuty('SAW', "24/02/2024", 1, [true, true, true]);
    await individualRosterPage.getIndividualRosterCalandarSection().assignDuty('SAW-15:45', '24/02/', [true, true]);
});


test('Test unasign and assign OFF in individual roster', async ({ loginPage, homePage, individualRosterPage }) => {

    await loginPage.login("SYSTEM", "Aer@Line@1234");
    await homePage.isWellcomeTextVisible();

    await individualRosterPage.load();
    await individualRosterPage.getSearchSection().fillFromDate("01/02/2024");
    await individualRosterPage.getSearchSection().fillToDate("29/02/2024");
    await individualRosterPage.getSearchSection().fillCrewId("105528");
    await individualRosterPage.getSearchSection().clickSearchButton();

    await individualRosterPage.getIndividualRosterSummarySection().validateCountry("Sri Lanka");
    await individualRosterPage.getIndividualRosterSummarySection().validateBatch("Batch 205");
    await individualRosterPage.getIndividualRosterSummarySection().validateCrewId("105528");
    await individualRosterPage.getIndividualRosterSummarySection().validateContact("00971111111111");
    await individualRosterPage.getIndividualRosterSummarySection().validateLanguage("SIN");

    await individualRosterPage.getIndividualRosterCalandarSection().validateDateDuration('29/02/2024');

    await individualRosterPage.getIndividualRosterCalandarSection().unassignLeave('OFF', '15/02/2024', 7);
    await individualRosterPage.getIndividualRosterCalandarSection().assignLeave('OFF', '15/02/2024', true);

});





const records = parse(fs.readFileSync(path.join('data/roster', 'CrewRosterData.csv')), { columns: true, skip_empty_lines: true });
records.sort((a, b) => b.order - a.order);

for (const record of records) {
    test(`Test unasign duty ${record.shot_name} on ${record.duty_date}`, async ({ loginPage, homePage, individualRosterPage }) => {
        await loginPage.login("SYSTEM", "Aer@Line@1234");
        await homePage.isWellcomeTextVisible();
        await individualRosterPage.load();
        await individualRosterPage.load();
        await individualRosterPage.getSearchSection().fillFromDate("01/02/2024");
        await individualRosterPage.getSearchSection().fillToDate("29/02/2024");
        await individualRosterPage.getSearchSection().fillCrewId("105528");
        await individualRosterPage.getSearchSection().clickSearchButton();
        await individualRosterPage.getIndividualRosterSummarySection().validateCountry("Sri Lanka");

        await individualRosterPage.getIndividualRosterCalandarSection().unassignDuty(record.shot_name,
             record.duty_date,record.nth_duty, JSON.parse(record.unassign_confirmations) );
    });
}



