class navtomartuat {
    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto('https://mart-uat.hamrostack.com/');
    }
}

module.exports = { navtomartuat};