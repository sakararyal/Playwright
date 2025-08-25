const { test, expect } = require('@playwright/test');
const { navtomart } = require('../../page/navtomart');

test.beforeEach(async ({ page }) => {
  const navPage = new navtomart(page);
  await navPage.navigate();

  try {
    const popupClose = page.locator("//img[@src='/images/svg/crossIcon.svg']");
    await popupClose.waitFor({ state: 'visible', timeout: 5000 });
    await popupClose.click();
    console.log('Popup closed');
  } catch (e) {
    console.log('Popup did not appear so continuing');
  }
});

test('Search results must contain keyword in first 3 products', async ({ page }) => {
  const searchQuery = 'water';

  await page.pause();
  // Search
  const searchInput = page.getByRole('textbox', { name: 'Search products here...' });
  await searchInput.click();
  await searchInput.fill(searchQuery);
  await page.locator('#search').getByRole('button').click();

  // Wait for the search API call
  const apiUrlPart = 'https://store-rest-new.hamropatro.com/search';
  await page.waitForResponse(response =>
    response.url().includes(apiUrlPart) &&
    response.status() === 200
  );

  const noProductMsg = page.locator('text=Product not found!');
  if (await noProductMsg.isVisible({ timeout: 3000 })) {
    console.log('There is no product for the search:', searchQuery);
    return;
  }

 await expect(page).toHaveURL(new RegExp(`\\?q=${searchQuery}`, 'i'));
  await expect(searchInput).toHaveValue(searchQuery);

  for (let i = 1; i <= 3; i++) {
    const productTitleLocator = page.locator(`(//h1[contains(@class,'product-title h-10')])[${i}]`);
    await expect(productTitleLocator).toBeVisible({ timeout: 5000 });

    const text = await productTitleLocator.textContent();
    console.log(`Product ${i} Title:`, text?.trim());

    expect(text?.toLowerCase()).toContain(searchQuery.toLowerCase());
  }

  console.log('All 3 product titles contain the search keyword i.e.', searchQuery);
});
