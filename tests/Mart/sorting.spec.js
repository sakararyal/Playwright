const { test, expect } = require('@playwright/test');
const { navtomart } = require('../../page/navtomart');

let page;
let sortingpage;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  sortingpage = new navtomart(page);
  await sortingpage.navigate();

  // Handle popup if it appears
  try {
    const popupClose = page.locator("//img[@src='/images/svg/crossIcon.svg']");
    await popupClose.waitFor({ state: 'visible', timeout: 5000 });
    await popupClose.click();
    console.log('Popup closed');
  } catch (e) {
    console.log('Popup did not appear so continuing');
  }

  // Navigate to 2nd category
  await page.getByRole('link', { name: 'Categories' }).click();
  await page.pause(); // keep your pause here for debugging
  await page.locator('a:nth-child(2)').first().click();

  // Validate selected category
  const category = await page.locator("(//div[contains(@class,'flex items-center')]//p)[2]");
  await category.waitFor({ state: 'visible' });
  const categoryText = await category.textContent();
  console.log('Category:', categoryText);

  const expectedCategory = "Men's Zone";
  if (categoryText === expectedCategory) {
    console.log('Category is correct:', categoryText);
  } else {
    console.log('Category is incorrect:', categoryText, "The expected category was", expectedCategory);
  }
});

test.afterEach(async () => {
  await page.close();
});

test.only('Sorting Validation (Price low to high)', async () => {
  await page.getByRole('button', { name: 'Price Low' }).click();
  const apiUrlPart = '/category/-O0i5TdnanU5HjbMK2ar/items';
  await page.waitForResponse(response =>
    response.url().includes(apiUrlPart) &&
    response.status() === 200
  );
  await page.waitForTimeout(2000);
  const priceLocator = page.locator("(//h2[contains(@class,'text-primary font-GilroyMedium')])[1]");
  await priceLocator.isVisible();
  const firstProductPriceText = await priceLocator.textContent();
  const match = firstProductPriceText.match(/(\d+(\,\d+)?)/);
  const firstProductPriceNumber = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  console.log('First Product Price:', firstProductPriceNumber);
  const secondProductPriceLocator = page.locator("(//h2[contains(@class,'text-primary font-GilroyMedium')])[2]");
  const secondProductPriceText = await secondProductPriceLocator.textContent();
  const secondMatch = secondProductPriceText.match(/(\d+(\,\d+)?)/);
  const secondProductPriceNumber = secondMatch ? parseFloat(secondMatch[0].replace(/,/g, '')) : 0;
  console.log('Second Product Price:', secondProductPriceNumber);

  const currentURL = page.url();
  if (firstProductPriceNumber <= secondProductPriceNumber && currentURL.includes('sort=ASC')) {
    console.log('Products are sorted by price in ascending order i.e low to high and first price is ' + firstProductPriceNumber + ' and second price is ' + secondProductPriceNumber);
  } else {
    console.log('Products are not sorted by price in ascending order');
  }
});

test('Sorting Validation (Price high to low)', async () => {
  await page.getByRole('button', { name: 'Price High' }).click();

  const apiUrlPart = '/category/-O0i5TdnanU5HjbMK2ar/items';
  const response = await page.waitForResponse(response =>
    response.url().includes(apiUrlPart) &&
    response.status() === 200
  );

  if (response.status() === 200) {
    console.log('API responded with 200');
  }

  await page.waitForTimeout(2000);

  const priceLocator = page.locator("(//h2[contains(@class,'text-primary font-GilroyMedium')])[1]");
  await priceLocator.isVisible();
  const firstProductPriceText = await priceLocator.textContent();
  const match = firstProductPriceText.match(/(\d+(\,\d+)?)/);
  const firstProductPriceNumber = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  console.log('First Product Price:', firstProductPriceNumber);

  const secondProductPriceLocator = page.locator("(//h2[contains(@class,'text-primary font-GilroyMedium')])[2]");
  const secondProductPriceText = await secondProductPriceLocator.textContent();
  const secondMatch = secondProductPriceText.match(/(\d+(\,\d+)?)/);
  const secondProductPriceNumber = secondMatch ? parseFloat(secondMatch[0].replace(/,/g, '')) : 0;
  console.log('Second Product Price:', secondProductPriceNumber);

  const currentURL = page.url();
  if (firstProductPriceNumber >= secondProductPriceNumber && currentURL.includes('sort=DESC')) {
    console.log('Products are sorted by price in descending order i.e high to low and first price is ' + firstProductPriceNumber + ' and second price is ' + secondProductPriceNumber);
  } else {
    console.log('Products are not sorted by price in descending order');
  }
});
