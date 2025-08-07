class navtohome {
    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto('https://app-dev.hamrostack.com/');
    }
}

module.exports = { HomePage };