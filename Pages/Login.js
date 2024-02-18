exports.LoginPage=class LoginPage {

        constructor(page){
            this.page=page
            this.username="//input[@name='username']"
            this.password="//input[@name='password']"
            this.signin="//button[@type='submit']"
        }


        async loginToApplication(user, pwd){
                
                await this.page.locator(this.username).fill(user);
                await this.page.locator(this.password).fill(pwd);
                await this.page.locator(this.signin).click();
        }

}