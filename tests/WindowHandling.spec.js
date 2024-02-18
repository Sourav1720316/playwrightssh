const { test, expect, chromium } = require("@playwright/test")


test("Window handling", async () => {


    const browser = await chromium.launch()

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

    await page.click("#newTabBtn")

    const pagePromise = await context.waitForEvent('page')

    const newPage = await pagePromise

    await newPage.click("#promptBox")

    newPage.on("dialog", async (dialog)=>{


        await dialog.accept("Sourav")

    })

})