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
 
        this.jobButton = page.getByRole('button', { name: 'job' });
        this.job_listButton = page.getByRole('button', { name: 'list' });

        this.filter = page.getByRole('button', { name: 'Filters' });
        this.click_jobfiled = page.getByRole('region').getByText('On Demand');
        this.closeButton = page.getByRole('button').nth(1);

    }

    async gotoLoginPage() {
        try {
          await this.page.goto('https://minimals.cc/', { waitUntil: 'load'});
          await this.page.getByRole('link', { name: 'Login' }).click();
        } catch (error) {
          console.error('Error navigating to login page:', error);
          throw error;
        }
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

     async Job_search_Filter() {
        await this.jobButton.click();
        await this.job_listButton.click();
        await this.filter.click();
        await this.click_jobfiled.click();
        await this.closeButton.click();
     }


}
