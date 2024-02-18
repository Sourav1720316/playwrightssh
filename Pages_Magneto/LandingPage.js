exports.LandingPage=class LandingPage{



        constructor(page){

            this.page=page
            this.signin="//header//a[normalize-space(text())='Sign In']"

        }


        async clickOnSignin(){
            await this.page.click(this.signin)
        }


}