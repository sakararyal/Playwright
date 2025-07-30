const { test,expect } = require('@playwright/test');
const {navtomart} = require('../../page/navtomart');
const { GoogleAuthPage } = require('../../page/googleauth');
const { navtomartuat } = require('../../page/martuat');

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
  });
test.describe('Cart and Quantity Validation', () => {
  let productNameHome;
  let productPriceHome;

  test.beforeEach(async ({ page }) => {
    const martPage = new navtomart(page);
    await martPage.navigate();

    const popupClose = page.locator("//img[@src='/images/svg/crossIcon.svg']");
    try {
      await popupClose.waitFor({ state: 'visible', timeout: 5000 });
      await popupClose.click();
      console.log('Popup closed');
    } catch (e) {
      console.log('Popup did not appear so continuing');
    }
  });

  test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished test: ${testInfo.title}`);
  });

  async function goToProductAndClickBuyNow(page) {
    await page.goto('https://mart.hamropatro.com/');

    const productXPath = '/html[1]/body[1]/div[1]/main[1]/div[1]/div[3]/main[1]/div[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[4]/a[1]/div[2]/h1[1]';
    const productElement = await page.locator(`xpath=${productXPath}`);
    productNameHome = await productElement.textContent();
    productPriceHome = await page
      .locator(`xpath=html[1]/body[1]/div[1]/main[1]/div[1]/div[3]/main[1]/div[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[4]/a[1]/div[2]/div[1]/div[1]/h2[1]`)
      .textContent();

    console.log('Product price Before clicking is:', productPriceHome);
    console.log('Product Name before clicking is:', productNameHome);

    await productElement.click();
    console.log('Product clicked');

    const buyNowButton = page.locator('text=Buy Now');
    await buyNowButton.waitFor({ state: 'visible', timeout: 5000 });

    if (await buyNowButton.isVisible()) {
      console.log('Buy Now button is visible');
      await buyNowButton.click();
      console.log('Buy Now button clicked');
    } else {
      console.log('Buy Now button not found. Redirecting to home...');
      await page.goto('https://mart.hamropatro.com/');
    }
  }

  test('Cart Validation', async ({ page }) => {
    await goToProductAndClickBuyNow(page);

    await page.locator("xpath=//p[@class='coupon-count svelte-195rrdk']").click();
    console.log('Clicked cart');

    const cartpageitem = await page
      .locator("xpath=//div[contains(@class,'text-sm sm:text-base')]")
      .first()
      .textContent();
    const cartitemprice = await page
      .locator("xpath=//p[contains(@class,'text-primary font-GilroyBold')]")
      .first()
      .textContent();

    if (cartpageitem?.trim() === productNameHome?.trim() &&
        cartitemprice?.trim() === productPriceHome?.trim()) {
      console.log('Product name and price in cart match the original values.');
      console.log('Name:', cartpageitem, 'and the Price:', cartitemprice);
    } else {
      console.log('Product in cart does not match.');
      console.log('Expected Name:', productNameHome, ' But Found:', cartpageitem);
      console.log('Expected Price:', productPriceHome, ' But Found:', cartitemprice);
    }

     });

test('Quantity Validation', async ({ page }) => {
  await goToProductAndClickBuyNow(page);
  await page.locator("xpath=//p[@class='coupon-count svelte-195rrdk']").click();
  console.log('Clicked cart from quantity validation test');
  //xpath for quantity display
  const quantityDisplayXPath = "xpath=//p[contains(@class,'px-2.5 py-[1px]')]";
  //Xpath for minus button
  const minusButtonXPath = "xpath=(//button[contains(@class,'rounded-full px-2')])[1]";
  // Corrected XPath for plus button
  const plusButtonXPath = "xpath=(//button[contains(@class,'rounded-full px-2')])[2]";


  // --- Test Case 1: Increase Quantity (check if greater) ---
  const initialQuantityPlusText = await page.locator(quantityDisplayXPath).textContent();
  let initialQuantityPlus = parseInt(initialQuantityPlusText.trim(), 10);
  console.log(`Initial quantity before clicking plus: ${initialQuantityPlus}`);
  await page.locator(plusButtonXPath).click();
  console.log('Clicked plus button');
  // Wait for the quantity to update
  await page.waitForTimeout(500); 
  const quantityAfterPlusText = await page.locator(quantityDisplayXPath).textContent();
  let quantityAfterPlus = parseInt(quantityAfterPlusText.trim(), 10);
  console.log(`Quantity after clicking plus: ${quantityAfterPlus}`);
  try {
    expect(quantityAfterPlus).toBeGreaterThan(initialQuantityPlus);
    console.log('Quantity increased as expected (after clicking plus).');
  } catch (error) {
    console.error(`The quantity button is not working as intended for INCREMENT. Expected greater than ${initialQuantityPlus}, but got ${quantityAfterPlus}.`);
    throw error;
  }

  // --- Test Case 2: Decrease Quantity (check if less) ---

  // Get the current quantity before clicking minus
  const initialQuantityMinusText = await page.locator(quantityDisplayXPath).textContent();
  let initialQuantityMinus = parseInt(initialQuantityMinusText.trim(), 10);
  console.log(`Initial quantity before clicking minus: ${initialQuantityMinus}`);
  await page.locator(minusButtonXPath).click();
  console.log('Clicked minus button');
  // Wait for the quantity to update
  await page.waitForTimeout(500);

  // Get the quantity after clicking minus
  const quantityAfterMinusText = await page.locator(quantityDisplayXPath).textContent();
  let quantityAfterMinus = parseInt(quantityAfterMinusText.trim(), 10);
  console.log(`Quantity after clicking minus: ${quantityAfterMinus}`);
  // Assert that the quantity decreased (is less than the initial quantity for this step)
  try {
    expect(quantityAfterMinus).toBeLessThan(initialQuantityMinus);
    console.log('Quantity decreased as expected (after clicking minus).');
  } catch (error) {
    console.error(`The quantity button is not working as intended for DECREMENT. Expected less than ${initialQuantityMinus}, but got ${quantityAfterMinus}.`);
    throw error;
    }

  
});
test('shipping cost validation', async ({ page }) => {
  await goToProductAndClickBuyNow(page);
  await page.locator("xpath=//p[@class='coupon-count svelte-195rrdk']").click();
  const plusButtonXPath = "xpath=(//button[contains(@class,'rounded-full px-2')])[2]";
  const totalPriceXPath = "xpath=//p[contains(@class,'text-xl font-GilroyBold')]";
  // Define the XPath for the shipping information text (to be extracted if shipping is free).
    const shippingInfoXPath = "xpath=(//p[@class='font-GilroyMedium'])[2]";
    async function getCurrentTotalPriceNumber() {
    const TotalpriceText = await page.locator(totalPriceXPath).first().textContent();
    const match = TotalpriceText.match(/(\d+(\.\d+)?)/);
    const TotalpriceNumber = match ? parseFloat(match[0]) : 0;
    console.log(`Extracted total price: ${TotalpriceText}, parsed as number: ${TotalpriceNumber}`);
    return TotalpriceNumber;
  }

  let TotalpriceNumber = await getCurrentTotalPriceNumber();
  console.log('Initial total price (parsed):', TotalpriceNumber);

  const FREE_SHIPPING_THRESHOLD = 1000;

  const MAX_CLICKS = 10;
  let clickCount = 0;

  console.log(`Checking if total price is <= ${FREE_SHIPPING_THRESHOLD} for free shipping...`);

  while (TotalpriceNumber <= FREE_SHIPPING_THRESHOLD && clickCount < MAX_CLICKS) {
    console.log(`Current total price (${TotalpriceNumber}) is <= ${FREE_SHIPPING_THRESHOLD}. Clicking plus button...`);
    await page.locator(plusButtonXPath).click();
    await page.waitForTimeout(1000);
    TotalpriceNumber = await getCurrentTotalPriceNumber(); 
        console.log(`Total price after click ${clickCount + 1}:`, TotalpriceNumber);
    clickCount++;
  }

 
  if (TotalpriceNumber >= FREE_SHIPPING_THRESHOLD) {
    console.log(`Final total price (${TotalpriceNumber}) is <= ${FREE_SHIPPING_THRESHOLD}. Shipping price is FREE.`);
    try {
      const freeShippingInfoText = await page.locator(shippingInfoXPath).textContent();
      console.log(`Extracted text for free shipping: "${freeShippingInfoText}"`);
        } catch (error) {
      console.error(`Could not extract shipping info text from "${shippingInfoXPath}":`, error);
    }
  } else {
    console.log(`Final total price (${TotalpriceNumber}) is > ${FREE_SHIPPING_THRESHOLD}. It will cost shipping charge.`);

  }

});
});

test.only('Guest Cart Validation After Clearing Cache', async ({ page, browser }) => {
  // Step 1: Navigate
  await page.goto('https://mart.hamropatro.com/');
  await page.waitForLoadState('domcontentloaded');
    await page.locator("xpath=(//h2[contains(@class,'text-primary font-GilroyMedium')])[4]").click();
  await page.locator("xpath=//button[text()='Buy now']").click();
  await page.locator("xpath=//p[@class='coupon-count svelte-195rrdk']").click();
  if(await page.locator("xpath=//a[contains(@class,'font-GilroyBold border')]").isVisible()) {
    console.log('Cart has not been updated');
  } else {
     await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.context().clearCookies();
  // Step 4: Clear browser cache (Chromium only)
  const cdpSession = await page.context().newCDPSession(page);
  await cdpSession.send('Network.clearBrowserCache');
  // Step 5: Reload the page
  await page.reload();
  await page.waitForLoadState('domcontentloaded');
  
  }
    await page.locator("xpath=//body[@data-sveltekit-preload-data='hover']").click();
  if(await page.locator("xpath=//a[contains(@class,'font-GilroyBold border')]").isVisible()) {
    console.log('After Clearing of the cache, cart has been cleared Test passed');
  } else{
  console.log('Cart has not been cleared Test failed');
  }
});
