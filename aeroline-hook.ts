import { test, expect } from '@playwright/test';


test.afterEach(async ({ page,browser }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  await browser.close();
});
