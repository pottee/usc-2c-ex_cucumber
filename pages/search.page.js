const { expect } = require('@playwright/test'); 

class SearchPage{

    constructor(page){
    
        this.page = page;
        // this.searchResults = page.locator("[data-testid='ItemContainer]");
        this.productItemsText = page.locator("[data-testid='ItemName']");
        this.searchBar = page.getByTestId('SearchInput');
        // this.searchIcon = page.getByTestId('SearchIcon');
        this.searchKeywordText = page.getByTestId('SearchKeyword');
        this.searchResultCountText = page.getByTestId('SearchResultCount');
        this.pageLoadingIcon = page.getByTestId('LoadingIcon');
    }

    async searchForKeyword(Keyword){

        await expect(this.searchBar).toBeVisible();
        await this.searchBar.fill(Keyword);
        await this.page.keyboard.press('Enter');
    }

    async selectProduct(productName){

        const count = await this.productItemsText.count();
        for (let i = 0; i < count; ++i){

            if (await this.productItemsText.nth(i).textContent() === productName){

                console.log(' per search results has found item at no. ', i+1)
                await this.productItemsText.nth(i).click();

                break;
            };
        }
    }

    async productItemsLoaded(){

        await this.page.waitForURL('**/search/**')
        await expect(this.pageLoadingIcon).toBeHidden();        

        await expect(this.searchKeywordText).toBeVisible({timeout: 120_000});     
    }
}

module.exports = {SearchPage};