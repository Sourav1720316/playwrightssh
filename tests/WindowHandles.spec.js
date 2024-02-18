const {test, expect, chromium}=require("@playwright/test")


test("Window handling practice", async () => {


        const browser = await chromium.launch()
        const context= await browser.newContext()

        const mainPage= await context.newPage()

        await mainPage.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

        await mainPage.click("//button[normalize-space(text())='Open New Window']")

        const pagePromise= await context.waitForEvent('page')

        const newPage=await pagePromise

        await newPage.click("//select[@id='selectnav2']")

        await newPage.waitForTimeout(5000)


})