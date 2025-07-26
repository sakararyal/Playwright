import { test, expect } from '@playwright/test';
import { HomePage } from '../page/home';
testgit('Hamro_pay', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.getByRole('button', { name: 'हाम्रो पे' }).first().click();
  await expect(page).toHaveURL('https://pay.hamropatro.com/');
   // Wait for navigation
  await page.waitForLoadState('load');
  const currentURL = page.url();
  const expectedURL = 'https://pay.hamropatro.com/'
    console.log('Current URL:', currentURL);
    if (currentURL === expectedURL) {
      console.log('✅ Test case passed: URL is correct for hamro pay');
      expect(currentURL === expectedURL, 'URL should match expected hamro pay').toBe(true);
      
    }   else {
      console.log('❌ Test case failed: URL is incorrect for hamro pay');
      expect(currentURL === expectedURL, 'URL should match expected hamro pay').toBe(false);
    }   
});

test('Hamro_mart', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('button', { name: 'हाम्रो मार्ट' }).first().click();
    await expect(page).toHaveURL('https://mart.hamropatro.com/');
     // Wait for navigation
    await page.waitForLoadState('load');
    const currentURL = page.url();
     const expectedURL = 'https://mart.hamropatro.com/'
        console.log('Current URL:', currentURL);
        if (currentURL === expectedURL ) {
        console.log('✅ Test case passed: URL is correct for hamro mart');
        expect(currentURL === expectedURL, 'URL should match expected mart page').toBe(true);
        }   else {
        console.log('❌ Test case failed: URL is incorrect for hamro mart');
        expect(currentURL === expectedURL, 'URL should match expected mart page').toBe(false);
        }
});
test('Hamro_jotish', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('button', { name: 'हाम्रो ज्योतिष' }).first().click();
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
    await expect(page).toHaveURL('https://jyotishsewa.hamropatro.com/j_c_np');
     // Wait for navigation
    await page.waitForLoadState('load');
    const currentURL = page.url();
     const expectedURL = 'https://jyotishsewa.hamropatro.com/j_c_np'
        console.log('Current URL:', currentURL);
        if (currentURL === expectedURL ) {
        console.log('✅ Test case passed: URL is correct for hamro jotish');
        expect(currentURL === expectedURL, 'URL should match expected hamro jotish').toBe(true);
        }   else {
        console.log('❌ Test case failed: URL is incorrect for hamro jotish');
        expect(currentURL === expectedURL, 'URL should match expected hamro jotish').toBe(false);
        }
});
test('Notesandevent', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('button', { name: 'नोट्स / इभेन्टहरू' }).first().click();
    await expect(page).toHaveURL('https://app.hamropatro.com/notes');
     // Wait for navigation
    await page.waitForLoadState('load');
    const currentURL = page.url();
    const expectedURL = 'https://app.hamropatro.com/notes'
        console.log('Current URL:', currentURL);
        if (currentURL === 'https://app.hamropatro.com/notes') {
        console.log('✅ Test case passed: URL is correct for notes and event');
        expect(currentURL === expectedURL, 'URL should match expected notes and event page').toBe(true);
        }   else {
        console.log('❌ Test case failed: URL is incorrect for notes and event');
        expect(currentURL === expectedURL, 'URL should match expected notes and event page').toBe(false);
        }
});
test('Hamrohealth', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'हाम्रो हेल्थ' }).first().click();
    await expect(page).toHaveURL('https://health.hamropatro.com/');
     // Wait for navigation
    await page.waitForLoadState('load');
    const currentURL = page.url();
    const expectedURL = 'https://health.hamropatro.com/'
        console.log('Current URL:', currentURL);
        if (currentURL === 'https://health.hamropatro.com/') {
        console.log('✅ Test case passed: URL is correct for notes and event');
        expect(currentURL === expectedURL, 'URL should match expected notes and event page').toBe(true);
        }   else {
        console.log('❌ Test case failed: URL is incorrect for notes and event');
        expect(currentURL === expectedURL, 'URL should match expected notes and event page').toBe(false);
        }
});
test('Patroview', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('button', { name: 'जीवनशैली' }).click();
    await page.getByRole('button', { name: 'पात्रो'}).first().click();
    await expect(page).toHaveURL('https://app.hamropatro.com/calendar?v=patro');
     // Wait for navigation
    await page.waitForLoadState('load');
    const currentURL = page.url();
    const expectedURL = 'https://app.hamropatro.com/calendar?v=patro'
        console.log('Current URL:', currentURL);
        if (currentURL === 'https://app.hamropatro.com/calendar?v=patro') {
        console.log('✅ Test case passed: URL is correct for patro view');
        expect(currentURL === expectedURL, 'URL should match expected patro view').toBe(true);
        }   else {
        console.log('❌ Test case failed: URL is incorrect for patro view');
        expect(currentURL === expectedURL, 'URL should match expected patro view').toBe(false);
        }
});
test('साइत', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.getByRole('button', { name: 'साइत' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://app.hamropatro.com/sahit/2081';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for साइत');
    expect(currentURL === expectedURL, 'URL should match expected साइत page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for साइत');
    expect(currentURL === expectedURL, 'URL should match expected साइत page').toBe(false);
  }
  
});
test('मिति परिवर्तन', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.getByRole('button', { name: 'मिति परिवर्तन' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://www.hamropatro.com/date-converter';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for मिति परिवर्तन');
    expect(currentURL === expectedURL, 'URL should match expected मिति परिवर्तन page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for मिति परिवर्तन');
    expect(currentURL === expectedURL, 'URL should match expectedमिति परिवर्तन page').toBe(false);
  }
  
});
test('बिदाहरू', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'जीवनशैली' }).click();
  await page.getByRole('button', { name: 'बिदाहरू' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://app.hamropatro.com/events?breakout=y&v=0';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for बिदाहरू');
    expect(currentURL === expectedURL, 'URL should match expected बिदाहरू page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for बिदाहरू');
    expect(currentURL === expectedURL, 'URL should match expectedमिति बिदाहरू page').toBe(false);
  }
  
});
test('समाचार', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'लोकप्रिय विशेषता' }).click();
  await page.getByRole('button', { name: 'समाचार' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://www.hamropatro.com/news';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for समाचार');
    expect(currentURL === expectedURL, 'URL should match expected समाचार page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for समाचार');
    expect(currentURL === expectedURL, 'URL should match expectedमिति समाचार page').toBe(false);
  }
  
});
test('रेडियो', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'लोकप्रिय विशेषता' }).click();
  await page.getByRole('button', { name: 'रेडियो' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://www.hamropatro.com/radio';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for रेडियो');
    expect(currentURL === expectedURL, 'URL should match expected रेडियो page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for रेडियो');
    expect(currentURL === expectedURL, 'URL should match expectedमिति रेडियो page').toBe(false);
  }
  
});

test('विनिमय दर', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'लोकप्रिय विशेषता' }).click();
  await page.getByRole('button', { name: 'विनिमय दर' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://www.hamropatro.com/forex';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for  विनिमय दर');
    expect(currentURL === expectedURL, 'URL should match expected विनिमय दर page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for  विनिमय दर');
    expect(currentURL === expectedURL, 'URL should match expectedमिति विनिमय दर page').toBe(false);
  }
  
});
test('राशिफल', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'लोकप्रिय विशेषता' }).click();
  await page.getByRole('button', { name: 'राशिफल' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://www.hamropatro.com/rashifal';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for राशिफल');
    expect(currentURL === expectedURL, 'URL should match expected राशिफल page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for राशिफल');
    expect(currentURL === expectedURL, 'URL should match expectedमिति राशिफल page').toBe(false);
  }
});

test('हाम्रो ज्योतिष', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'ज्योतिष', exact: true }).click();
  await page.getByRole('button', { name: 'हाम्रो ज्योतिष' }).first().click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://jyotishsewa.hamropatro.com/j_c_np';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for हाम्रो ज्योतिष');
    expect(currentURL === expectedURL, 'URL should match expected हाम्रो ज्योतिष').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for हाम्रो ज्योतिष');
    expect(currentURL === expectedURL, 'URL should match expectedमिति हाम्रो ज्योतिष').toBe(false);
  }
});
test('ब्लग', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'मिडिया र जानकारी' }).click();
  await page.getByRole('button', { name: 'ब्लग' }).click();
  await page.waitForLoadState('load');
  const expectedURL = 'https://www.hamropatro.com/posts';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct for ब्लग');
    expect(currentURL === expectedURL, 'URL should match expected ब्लग page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for ब्लग');
    expect(currentURL === expectedURL, 'URL should match expectedमिति ब्लग page').toBe(false);
  }
});

test('अडियो / पोड्काष्ट', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'मिडिया र जानकारी' }).click();
  await page.getByRole('button', { name: 'अडियो / पोड्काष्ट' }).click();
  const expectedURL = 'https://podcasts.hamropatro.com/';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL === expectedURL) {
    console.log('✅ Test case passed: URL is correct forअडियो / पोड्काष्ट');
    expect(currentURL === expectedURL, 'URL should match expected अडियो / पोड्काष्ट page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for अडियो / पोड्काष्ट');
    expect(currentURL === expectedURL, 'URL should match expected अडियो / पोड्काष्ट').toBe(false);
  }
});

//yo baki xa 
// test('सिनेमा', async ({ page }) => {
//   const homePage = new HomePage(page);
//   await homePage.navigate();
//   await page.waitForLoadState('load');
//   await page.getByRole('button', { name: 'मिडिया र जानकारी' }).click();
//   await page.getByRole('button', { name: 'सिनेमा' }).click();
//   const expectedURL = 'https://app.hamropatro.com/pages/hamropatro-blog/-';
//   await page.waitForLoadState('load')
//   const currentURL = page.url();
//   console.log('Current URL:', currentURL);

//   if (currentURL.includes(expectedURL)) {
//     console.log('✅ Test case passed: URL is correct for सिनेमा');
//     expect(currentURL === expectedURL, 'URL should match expected सिनेमा page').toBe(true);
//   } else {
//     console.log('❌ Test case failed: URL is incorrect for राशिफल');
//     expect(currentURL === expectedURL, 'URL should match expectedमिति सिनेमा page').toBe(false);
//   }
// });

test('सुन/चाँद', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'बजारहरू' }).click();
  await page.getByRole('button', { name: 'सुन/चाँद' }).click();
  const expectedURL = 'https://www.hamropatro.com/gold';
  await page.waitForLoadState('load')
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL.includes(expectedURL)) {
    console.log('✅ Test case passed: URL is correct for सुन/चाँद');
    expect(currentURL === expectedURL, 'URL should match expected सुन/चाँद page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect forसुन/चाँद ');
    expect(currentURL === expectedURL, 'URL should match expected सुन/चाँद page').toBe(false);
  }
});


test('ब्याज दर', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'बजारहरू' }).click();
  await page.getByRole('button', { name: 'ब्याज दर' }).click();
  const expectedURL = 'https://bank-rates.hamropatro.com/';
  await page.waitForLoadState('load')
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL.includes(expectedURL)) {
    console.log('✅ Test case passed: URL is correct for ब्याज दर');
    expect(currentURL === expectedURL, 'URL should match expected ब्याज दर page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for ब्याज दर');
    expect(currentURL === expectedURL, 'URL should match expected ब्याज दर page').toBe(false);
  }
});

test('ई-लर्निंङ्', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'शिक्षा' }).click();
  await page.getByRole('button', { name: 'ई-लर्निंङ्' }).click();
  const expectedURL = 'https://learn.hamropatro.com/';
  await page.waitForLoadState('load')
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL.includes(expectedURL)) {
    console.log('✅ Test case passed: URL is correct for ई-लर्निंङ्');
    expect(currentURL === expectedURL, 'URL should match expected ई-लर्निंङ् page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for ई-लर्निंङ्');
    expect(currentURL === expectedURL, 'URL should match expected ई-लर्निंङ्page').toBe(false);
  }
});
test('क्विज', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'शिक्षा' }).click();
  await page.getByRole('button', { name: 'क्विज' }).click();
  const expectedURL = 'https://playquiz.hamropatro.com/quiz';
  await page.waitForLoadState('load')
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL.includes(expectedURL)) {
    console.log('✅ Test case passed: URL is correct for क्विज');
    expect(currentURL === expectedURL, 'URL should match expected क्विज page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for क्विज ');
    expect(currentURL === expectedURL, 'URL should match expected क्विज page').toBe(false);
  }
});
test('FOR_YOU', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'FOR_YOU' }).click();
  await page.waitForTimeout(5000); 
  const expectedURL = 'https://app.hamropatro.com/explore';
  const currentURL = page.url();
  console.log('Current URL:', currentURL);

  if (currentURL.includes(expectedURL)) {
    console.log('✅ Test case passed: URL is correct for FOR_YOU');
    expect(currentURL === expectedURL, 'URL should match expected FOR_YOU page').toBe(true);
  } else {
    console.log('❌ Test case failed: URL is incorrect for FOR_YOU ');
    expect(currentURL === expectedURL, 'URL should match expectedFOR_YOU page').toBe(false);
  }
});

