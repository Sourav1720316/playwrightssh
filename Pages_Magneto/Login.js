exports.Login=class Login{



    constructor(page){

        this.page=page
        this.email="//fieldset//input[@id='email']"
        this.password="//fieldset//input[@id='pass']"
        this.signinbutton="//fieldset//button[@id='send2']"
    }



    async LoginToApplication(email,pwd){

        await this.page.locator(this.email).fill(email)
        await this.page.locator(this.password).fill(pwd)
        await this.page.click(this.signinbutton)
    }




}