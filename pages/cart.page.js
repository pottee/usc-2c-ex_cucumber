const { expect } = require('@playwright/test'); 

class CartPage{

    constructor(page){
    
        this.page = page;
        this.buyNowButton = page.getByTestId('BuyNowButton');
        this.itemBySeller = page.getByTestId('AnItemBySeller');
        this.removeItemButton = page.getByTestId('RemoveItem');
    }

    async assertProductAdded(productItem){

        await new Promise(async (resolve) => {
            const itemList = []
            const count = await this.itemBySeller.count();
            console.log(" number of items in cart ", count);

            for (let i = 0; i < count; ++i){

                let singleItemObj = {};
                const itemName = await this.itemBySeller.nth(i).locator("[data-testid='AnItemName']").textContent();
                const itemPrice = await this.itemBySeller.nth(i).locator("[data-testid='AnItemPrice']").textContent();

                singleItemObj['itemName'] = itemName;
                singleItemObj['itemPrice'] = itemPrice;
                console.log(" item obj found is ", singleItemObj);
                itemList.push(singleItemObj);
            }
            console.log(" itemList ", itemList);
            await expect(itemList[0]).toEqual(productItem);
        
            resolve();
        });
    }

    async buyNowButtonLoaded(){

        await new Promise(async (resolve) => {
            setTimeout(async () => {

                await this.page.waitForURL('**/cart/')
                await expect(this.buyNowButton).toBeVisible(); 
                resolve();
            }, 10000);
        });
    }
}

module.exports = {CartPage};