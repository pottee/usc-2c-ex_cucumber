const { expect } = require('@playwright/test'); 

class ItemDetailsPage{

    constructor(page){
    
        this.page = page;
        this.addToCartButton = page.getByTestId('AddToCartButton');
        this.goToCartButton = page.getByTestId('GoToCartButton');   
        this.viewToCartButton = page.locator('text="View cart"');
        this.makeOfferButton = page.getByTestId('MakeOfferButton');
        this.modalDialog = page.locator("text=It's now or never");
    }

    async clickAddToCart(){

        await this.addToCartButton.click() 
    }

    async clickViewToCart(){

        await this.viewToCartButton.click();
    }

    async addToCartButtonLoaded(){
         

        await this.page.waitForURL('**/item/**')
        await this.page.on('dialog', async dialog => {                
        
            console.log(' modal is displayed eventually, whay says', dialog.message());
            await this.page.keyboard.press('Escape');
        } );

        await expect(this.addToCartButton).toBeVisible({timeout: 120_000});
    }

    async viewToCartButtonLoaded(){
 
        await expect(this.viewToCartButton).toBeVisible();   
    }
}

module.exports = {ItemDetailsPage};