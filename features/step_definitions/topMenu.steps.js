const { Given, When, Then } = require('@cucumber/cucumber');

Then('I should see number {int} in cart icon', async function (expectedQty) {

    await this.topMenu.assertNumberOfItems(expectedQty);
});
