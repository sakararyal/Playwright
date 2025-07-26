// pages/GoogleAuthPage.js
class GoogleAuthPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByRole('textbox', { name: 'Email or phone' });
      this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
      this.nextButton = page.getByRole('button', { name: 'Next' });
    }
  
    async enterEmail(email) {
      await this.emailInput.fill(email);
      await this.nextButton.click();
    }
  
    async enterPassword(password) {
      await this.passwordInput.fill(password);
      await this.nextButton.click();
    }
  }
  
  module.exports = { GoogleAuthPage };
  