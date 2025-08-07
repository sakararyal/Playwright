const {test ,expect} = require('@playwright/test');
const {navtomart} = require('../../page/navtomart');
test('Checkout Validation',async ({page})=>{
  const martPage = new navtomart(page);
  await martPage.navigate();
  await page.getByRole('link', { name: 'Gaunghar Organics Buckwheat' }).click();
  await page.getByRole('button', { name: 'Buy now' }).click();
  await page.locator("//p[@class='coupon-count svelte-195rrdk']").click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
  await page.getByRole('textbox', { name: 'Enter coupon code' }).click();
  await page.getByRole('textbox', { name: 'Enter coupon code' }).fill('MARTFORHPS');
  await page.getByRole('button', { name: 'Apply' }).click();
  const toast = page.locator('html > body > div > main > div:nth-of-type(2) > div > p');
  await toast.waitFor({ state: 'visible', timeout: 5000 });
  // Extract the text
  const toastText = await toast.textContent();
  console.log('Toast Message:', toastText);
  const discountedPriceXPath = "(//div[@class='label svelte-trn8i5']/following-sibling::div)[3]";
  const discountpriceText = await page.locator(discountedPriceXPath).first().textContent();
  const match = discountpriceText.match(/(\d+(\.\d+)?)/);
  const discountpriceNumber = match ? parseFloat(match[0]) : 0;
    console.log('Discounted Price:', discountpriceNumber);
  if(toastText === "Coupon not found." && discountpriceNumber === 0){
  await page.getByRole('textbox', { name: 'Enter coupon code' }).fill('MARTFORHP');
  await page.getByRole('button', { name: 'Apply' }).click();
  const discountedPriceXPath = "(//div[@class='label svelte-trn8i5']/following-sibling::div)[3]";
  const discountinsideif = await page.locator(discountedPriceXPath).first().textContent();
  const match = discountinsideif.match(/(\d+(\.\d+)?)/);
  const Discount = match ? parseFloat(match[0]) : 0;
  const DeliveryFee = "//div[@class='font-GilroyMedium text-gray-700']";
  const deliveryFeeText = await page.locator(DeliveryFee).first().textContent();
  const matchdelivery = deliveryFeeText.match(/(\d+(\.\d+)?)/);
  const deliveryFeeNumber = matchdelivery ? parseFloat(matchdelivery[0]) : 0;
  console.log('Delivery Fee:', deliveryFeeNumber);
  if (Discount === deliveryFeeNumber){
    console.log("Test case passed: If correct Coupon is applied, the discounted price is displayed correctly and the discounted price is",Discount);
  }
  else{
    console.log("Test case failed: If correct Coupon is applied, the discounted price is not displayed correctly and the discounted price is:", Discount);
  }
  }else{
    console.log('Toast Message:', toastText);
  }
  
  })
