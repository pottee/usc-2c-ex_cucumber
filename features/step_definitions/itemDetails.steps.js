const { Given, When, Then } = require('@cucumber/cucumber');

Given('I add product to cart', async function () {

    await this.itemDetailsPage.addToCartButtonLoaded();
    await this.itemDetailsPage.clickAddToCart();
});
