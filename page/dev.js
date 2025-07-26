class HomePage {
    constructor(page) {
      this.page = page;
      this.languageSelector = page.locator('.order-2 > div > div:nth-child(2) > .outline-none');
      this.loginButton = page.getByRole('button', { name: 'लग इन गर्नुहोस्' });
      this.googleSignInButton = page.getByRole('button', { name: 'Sign in With Google' });
    }
  
    async navigate() {
      await this.page.goto('https://app-dev.hamrostack.com/');
    }
  
    async selectLanguage() {
      await this.languageSelector.click();
    }
  
    async clickLogin() {
      await this.loginButton.click();
    }
  
    async clickGoogleSignIn() {
      const [popup] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.googleSignInButton.click(),
      ]);
      return popup;
    }
  }
  
  module.exports = { HomePage };