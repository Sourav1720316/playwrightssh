const {test, expect}=require("@playwright/test")
const { assert } = require("console")



// test('FirstTest', async({page}) =>{

//     await page.goto("http://www.google.com")
//     const pageTitle= await page.title()


// });

test('Login test', async({page}) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.getByRole("textbox", {name: 'username'}).fill("Admin")
        await page.locator("//input[@name='password']").fill("admin123")
        await page.click("//button[@type='submit']")

        const pageTitle=await page.title()
        await expect(pageTitle).toBe("OrangeHRM")
        console.log(pageTitle)

        await page.waitForSelector("//span[contains(@class,'menu-item')]")
        // const items= await page.locator("//span[contains(@class,'menu-item')]")
        //  console.log(await items.count());

        // for(let i=0; i< await items.count(); i++){
        //     console.log(await items.nth(i).textContent());
        // }

        // await page.close();

        // const items= await page.$$("//span[contains(@class,'menu-item')]")

        // for(const item of items){
        //     console.log(await item.textContent());
        // }

        // await items[1].click()

        // const items= await page.locator("//span[contains(@class,'menu-item')]").all()

        // for(const item of items){
        //     console.log(await item.textContent());
        // }
        
})