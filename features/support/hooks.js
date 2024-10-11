const { Before, After, AfterStep, Status } = require('@cucumber/cucumber');

Before(async function () {
    
    await this.init(); 
});

After(async function (scenario) {

    // console.log("this.attach exists:", typeof this.attach === "function");
    // if (scenario.result && scenario.result.status === Status.FAILED) {   // screenshot after end scenario and failed result only
    //     const { page } = this;

    //     if (page) {
    //         const screenshotPath = `./screenshots/` + `${scenario.pickle.name}.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.png`;
    //         const screenshot = await page.screenshot({ path: screenshotPath, fullPage: true });
    //         await this.attach(screenshot, "image/png");

    //     } else {
    //         console.error('No page object available for taking a screenshot.');
    //     }
    // }
    await this.close(); // Cleanup after each scenario
});

AfterStep(async function (step) {

    const { page } = this;

    if (page) {
        await page.screenshot({ fullPage: true });
        await this.attach(await page.screenshot(), "image/png");    // this has shorter screenshot as opened browser size/visible screen. not too long screenshot like other ways.

    } else {
        console.error('No page object available for taking a screenshot.');
    }
});
