// tests/login.spec.js

const path = require('path');
const { test, expect } = require('@playwright/test');
const { readCredentialsFromCSV, performGoogleLogin } = require('../helpers/loginhelper');

test('User can log in via Google', async ({ page }) => {
  const csvFilePath = path.resolve(__dirname, 'C:/cred.csv');
  const credentials = await readCredentialsFromCSV(csvFilePath);
  const { email, password } = credentials[0];
  await performGoogleLogin(page, email, password);
  await page.pause();
  
});
