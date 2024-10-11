const { expect } = require('@playwright/test'); 

class TopMenu{

    constructor(page){
    
        this.page = page;
        // this.cartBadgeWithCount = page.getByTestId('BadgeWithCount');
        this.cartBadgeWithCount = page.getByTestId('CartIconWithCounter').locator("[data-testid='BadgeWithCount']");
    }

    async cartNumberOfItems(){

        await expect(this.cartBadgeWithCount).toBeVisible();
        return Number(await this.cartBadgeWithCount.textContent());
    }

    async assertNumberOfItems(number){

        expect(await this.cartNumberOfItems()).toEqual(number);
    }
}

module.exports = {TopMenu};