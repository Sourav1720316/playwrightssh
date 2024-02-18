exports.BaseClass=class BaseClass{


    constructor(page){

        this.page=page
    }

    async setup(){

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")       

    }

}