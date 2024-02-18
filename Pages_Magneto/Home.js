exports.Home = class Home {


    constructor(page) {

        this.page = page
    }


    async pageTitle() {

        return await this.page.title()
    }

    async selectOption(mainItem, subItem = "", product) {

        await this.page.waitForLoadState("networkidle")
        await this.page.hover("//nav//span[text()='" + mainItem + "']")

        if (subItem.length > 0) {

            await this.page.hover("//nav//span[text()='"+mainItem+"']/../..//span[text()='"+subItem+"']")

        }

        await this.page.click("//nav//span[text()='"+mainItem+"']/../..//span[text()='"+subItem+"']/../..//span[text()='"+product+"']")
    }


}