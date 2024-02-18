const {expect} = require("@playwright/test")
const exp = require("constants")

exports.HomePage=class HomePage{


    constructor(page){
        this.page=page
        this.timeatwork="//p[text()='Time at Work']"
        this.searchField="//input[@placeholder='Search']"
        this.menuItem="//a[contains(@class,'menu-item')]/span"
    }


    async timeatworkWidget(){
        await expect (await this.page.locator(this.timeatwork)).toBeVisible()
    }

    async enterValueInSearchField(searchTerm){
        await this.page.locator(this.searchField).fill(searchTerm)
        const menuItemName= await this.page.locator(this.menuItem).textContent()
        await expect(menuItemName).toEqual("Leave")
    }

}