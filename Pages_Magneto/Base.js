exports.Base=class Base {


    constructor(page) {

        this.page = page

    }


    async launchApplication(url) {

        await this.page.goto(url)
    }

}