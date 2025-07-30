const { test } = require('@playwright/test');
const { HomePage } = require('../page/home');
const { GoogleAuthPage } = require('../page/googleauth');
const { readCredentialsFromCSV, performGoogleLogin } = require('../helpers/loginhelper');

test('User can log in and create a note', async ({ page }) => {
const credentials = await readCredentialsFromCSV(require('path').resolve(__dirname, '../cred.csv'));
  const { email, password } = credentials[0];
  await performGoogleLogin(page, email, password);
  // Wait for dashboard to load
   await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'नोटस्' }).click();
  await page.waitForTimeout(2000); // Wait for the notes section to load

  // Start creating a new note
  await page.locator('button').filter({ hasText: 'नोट्स राख्नुहोस्' }).click();
  // Fill in note details
  const title = 'hi there from automated test';
  const description = 'This is a test note created by Playwright.';
  await page.getByRole('textbox', { name: 'शीर्षक' }).fill(title);
  await page.getByRole('textbox', { name: 'विवरण' }).fill(description);
  await page.getByRole('button', { name: 'Select Image' }).click();
  await page.getByRole('button', { name: 'Image 6' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  page.getByRole("bawait page.pause());")
  
  const toastMessage = page.locator('text=Note created successfully');
  console.log('Toast message:', await toastMessage.textContent());

  // Check if the toast message is visible

  if (await toastMessage.isVisible()) {
    console.log('✅ Note was added successfully.');
  } else {
    console.error('❌ Error: Note was not added.');
    throw new Error('Note creation failed: Toast message not visible.');
  }
});
test('Notes verification', async ({ page }) => {
const { email, password } = credentials[0];
  await performGoogleLogin(page, email, password);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'नोटस्' }).click();
  await page.waitForTimeout(5000); // Wait for the notes section to load
  await page.getByRole('button', { name: 'hi there from automated test' }).first().click();
  await page.waitForTimeout(5000); 
  const note = page.locator('text=hi there from automated test');
   console.log('note', await note.textContent());
// Check if the note text is visible
if (await note.isVisible()) {
  console.log('✅ The note added is visible after saving.');
} else {
  console.error('❌ The note is not visible after saving.');
  throw new Error('Note visibility check failed.');
}
});