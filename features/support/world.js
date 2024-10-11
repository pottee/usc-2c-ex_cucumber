const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright'); 
const { HomePage } = require('../../pages/home.page');
const { SearchPage } = require('../../pages/search.page');
const { ItemDetailsPage } = require('../../pages/itemDetails.page');
const { TopMenu } = require('../../pages/topMenu.page');
const { CartPage } = require('../../pages/cart.page');

setDefaultTimeout(60000);

class CustomWorld {
    
    constructor({ attach }) {

        console.log("Initializing CustomWorld...");
        this.browser = null;
        this.context = null; 
        this.page = null; 
        this.homePage = null;
        this.searchPage = null;
        this.itemDetailsPage = null;
        this.topMenu = null;
        this.cartPage = null;
        this.attach = attach;
    }

    async init() {

        console.log("Initializing Browser...");
        //console.log("Current World Context:", this); // Log context here
        this.browser = await chromium.launch({ headless: false});
        this.context = await this.browser.newContext(); 
        this.page = await this.context.newPage();

        this.homePage = new HomePage(this.page);
        // console.log("Current World Context:", this.homePage); // Log context here
        this.searchPage = new SearchPage(this.page);
        this.itemDetailsPage = new ItemDetailsPage(this.page);
        this.topMenu = new TopMenu(this.page);
        this.cartPage = new CartPage(this.page);
        console.log("Browser initialized.");
    }

    async close() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
