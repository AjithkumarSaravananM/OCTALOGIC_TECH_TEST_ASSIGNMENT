exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;

        this.userEmailTextbox = page.getByLabel('Email address');
        this.userPasswordTextbox = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Login' });

        this.userButton = page.getByRole('button', { name: 'user' });

        this.accountButton = page.getByRole('button', { name: 'account' });
        this.billingTab = page.getByRole('tab', { name: 'Billing' });

        this.orderButton =page.getByRole('button', { name: 'order' });
        this.listButton =page.getByRole('button', { name: 'list' });
        this.search_button =page.getByPlaceholder('Search customer or order');
 
    }

    async gotoLoginPage() {
        await this.page.goto('https://minimals.cc/');
        await this.page.getByRole('link', { name: 'Login' }).click();
    }

    async login(userEmail, userPassword) {
        await this.userEmailTextbox.fill(userEmail);
        await this.userPasswordTextbox.fill(userPassword);
        await this.submitButton.click();
    }

    async updateBilling() {
        await this.userButton.click();
        await this.accountButton.click();
        await this.billingTab.click();
    }
    async List_search() {
        await this.orderButton.click();
        await this.listButton.click();
        await this.search_button.click();
     }
}
