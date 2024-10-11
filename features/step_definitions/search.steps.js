const { Given, When, Then } = require('@cucumber/cucumber');
const testData = require('../../test-data/productItemsData.json');

When('I select a product item from search result', async function () {

    // console.log("Current context:", this.homePage); // Check the context
    await this.homePage.openPage();
    await this.homePage.acceptPrivacy();

    await this.searchPage.searchForKeyword(testData.searchKeyword);
    await this.searchPage.productItemsLoaded();
    await this.searchPage.selectProduct(testData.productItem1.itemName); 
});

When('I open the homepage', async function () { 

    await this.homePage.openPage();
});
