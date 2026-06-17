class LoginPage {

    constructor(page) {
        this.page = page;

        this.identifier = '#identifier';
        this.password = '#password';
        this.loginButton = 'button[type="submit"]';
    }

    async login(username, password) {

        await this.page.fill(this.identifier, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);

    }

}

module.exports = { LoginPage };