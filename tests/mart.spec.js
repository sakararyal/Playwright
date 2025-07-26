const { test,expect } = require('@playwright/test');
const {navtomart} = require('../page/navtomart');
const { GoogleAuthPage } = require('../page/googleauth');
const { constants } = require('buffer');


test('Product Validation', async ({ page }) => {
  const martPage = new navtomart(page);
  await martPage.navigate();
  const popupClose = page.locator("//img[@src='/images/svg/crossIcon.svg']");

try {
  const popupClose = page.locator("//img[@src='/images/svg/crossIcon.svg']");
  await popupClose.waitFor({ state: 'visible', timeout: 5000 });
  await popupClose.click();
  console.log('Popup closed');
} catch (e) {
  console.log('Popup did not appear so continuing');
}

  await page.goto('https://mart.hamropatro.com/');
  const productXPath = '/html[1]/body[1]/div[1]/main[1]/div[1]/div[3]/main[1]/div[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[4]/a[1]/div[2]/h1[1]';
  const productElement = await page.locator(`xpath=${productXPath}`);
  const productNameHome = await productElement.textContent();
  const productPriceHome = await page.locator(`xpath=html[1]/body[1]/div[1]/main[1]/div[1]/div[3]/main[1]/div[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[4]/a[1]/div[2]/div[1]/div[1]/h2[1]`).textContent();
  console.log('Product price Before clicking is:', productPriceHome);
  console.log('Product Name before clicking is:', productNameHome);
  await productElement.click();
  console.log('clicked');
  const buyNowButton = page.locator('text=Buy Now');
  await buyNowButton.waitFor({ state: 'visible', timeout: 5000 });
  if (await buyNowButton.isVisible()) {
    console.log('Buy Now button is visible');
    const productNameDetail = await page.locator(`xpath=//div[text()='The Leader In You By Dale Carnegie']`).first().textContent();
    const productPriceDetail1 = await page.locator(`xpath=//h2[contains(@class,'text-2xl md:text-3xl')]`).first().textContent();
    console.log('Product Name (Detail):', productNameDetail);
    expect(productNameDetail.trim()).toBe(productNameHome.trim());
    expect(productPriceDetail1.trim()).toBe(productPriceHome.trim());
    console.log('Product name matched:', productNameDetail + 'and price matched:', productPriceDetail1);

  } else {
    console.log('Buy Now button not found. Redirecting to home...');
    await page.goto('https://mart.hamropatro.com/');
    console.log('Product not found');
  }
  await page.pause();
});
