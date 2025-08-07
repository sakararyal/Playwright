const{test,expect}=require('@playwright/test');
const { navtomart } = require('../../page/navtomart');
test('Sorting Validation',async ({page})=>{
    const sortingpage=new navtomart(page);
    await sortingpage.navigate();
    try {
  const popupClose = page.locator("//img[@src='/images/svg/crossIcon.svg']");
  await popupClose.waitFor({ state: 'visible', timeout: 5000 });
  await popupClose.click();
  console.log('Popup closed');
} catch (e) {
  console.log('Popup did not appear so continuing');
  
}
  await page.getByRole('link', { name: 'Categories' }).click();
  await page.pause();
  await page.locator('a:nth-child(2)').first().click();
  const category = await page.locator("(//div[contains(@class,'flex items-center')]//p)[2]");
  await category.waitFor({ state: 'visible'});
  const categoryText = await category.textContent();
  console.log('Category:', categoryText);
  const expectedCategory="Men's Zone";
  if (categoryText === expectedCategory) {
    console.log('Category is correct:', categoryText);
  }else{
    console.log('Category is incorrect:', categoryText,"The expected category was",expectedCategory);
  }
    await page.getByRole('button', { name: 'Price Low' }).click();
    const apiUrlPart = '/category/-O0i5TdnanU5HjbMK2ar/items';
    const response = await page.waitForResponse(response =>
    response.url().includes(apiUrlPart) &&
    response.status() === 200
    );
    if( response.status() === 200){}
    console.log('API responded with 200');
    await page.waitForTimeout(2000);
    const priceLocator = page.locator("(//h2[contains(@class,'text-primary font-GilroyMedium')])[1]");
    await priceLocator.isVisible();
    const firstProductPriceText = await priceLocator.textContent();
    const match = firstProductPriceText.match(/(\d+(\,\d+)?)/);
    const firstProductPriceNumber = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
    console.log('First Product Price:', firstProductPriceNumber);
    await page.pause();
});
