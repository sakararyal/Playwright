class navtomart {
    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto('https://mart.hamropatro.com/');
    }
}

module.exports = { navtomart };