const { test, expect } = require("@playwright/test")


test("Frame handling", async ({ page }) => {

        await page.goto("https://demo.automationtesting.in/Frames.html")

        await page.click("(//a[@class='analystic'])[2]")

        await page.waitForTimeout(2000)

        const firstframe = await page.frame({ url: "https://demo.automationtesting.in/MultipleFrames.html" })

        const allChildFrames = await firstframe.childFrames()

        await allChildFrames[0].locator("//input").fill("Sourav")

        await page.mainFrame() // Return to parent frame
        await page.waitForTimeout(2000)


})