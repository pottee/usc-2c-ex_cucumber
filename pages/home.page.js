const { expect } = require('@playwright/test'); 

class HomePage{

    constructor(page){

        this.page = page;
        this.gotItPrivacyButton = this.page.getByRole('button', { name: 'Got it'});
     }

     async openPage(){

        await this.page.goto('https://tba.com');
        await expect(this.page).toHaveTitle('tba');
     }

     async acceptPrivacy(){

         await this.gotItPrivacyButton.click();
     }
}

module.exports = {HomePage};