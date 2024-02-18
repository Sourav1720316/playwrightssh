const {test, expect}=require("@playwright/test")
const exp = require("constants")
const { beforeEach } = require("node:test");
const { report } = require("process");

let page;

test.beforeEach(async ({browser})=>{

        page=await browser.newPage()
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.fill("//input[@name='username']", "Admin")
        await page.fill("//input[@name='password']", "admin123")
        await page.click("//button")

})

test.afterEach(async() => {

    await page.close()

})

test("Menu options", async({}) =>{

    const menuOptions= await page.$$("//ul//span[contains(@class,'menu-item')]")

    let menuNames=[]
    for(const menuOption of menuOptions){

        await menuNames.push(await menuOption.textContent())
    }

    await console.log(menuNames);
    // expect(menuNames.includes("Time")).toBeTruthy()


    await page.close()

})


test("Home page icon", async({page}) =>{


    const homeIcon= await page.locator("//li[@class='--active oxd-userdropdown']").isVisible()

    // await expect(homeIcon).toBeTruthy()

    await page.close()

})