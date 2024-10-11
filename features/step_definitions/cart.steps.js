const { Given, When, Then } = require('@cucumber/cucumber');
const testData = require('../../test-data/productItemsData.json');

Given('I should see the product information in my cart', async function () {
        
    await this.itemDetailsPage.viewToCartButtonLoaded(); // it might navigate to cart page by clicking cart badge icon first then 'View cart' button instead. If it's not in item details page and the item already added.
    await this.itemDetailsPage.clickViewToCart();
    
    await this.cartPage.buyNowButtonLoaded();
    await this.cartPage.assertProductAdded(testData.productItem1);
});