const fs = require('fs');
const csv = require('csv-parser');
const { HomePage } = require('../page/home');
const { GoogleAuthPage } = require('../page/googleauth');


function readCredentialsFromCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
}

async function performGoogleLogin(page, email, password) {
  const homePage = new HomePage(page);
  console.log('Navigating to home page...');
  await homePage.navigate();
  await homePage.selectLanguage();
  await homePage.clickLogin();
  const popup = await homePage.clickGoogleSignIn();

  const googleAuth = new GoogleAuthPage(popup);
  await googleAuth.enterEmail(email);
  await popup.waitForTimeout(2000);
  await googleAuth.enterPassword(password);
}
module.exports = { readCredentialsFromCSV, performGoogleLogin };
