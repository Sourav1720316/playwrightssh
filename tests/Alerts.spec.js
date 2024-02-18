/*  Alerts are automatically dismissed by playwright, hence there is no particular need to handle an alert.
    However, if we want to perform some action on an alert in playwright then we need to design the alert handler before opening
    the alert.
    All alert kind of alerts has to handled in this way.
*/


const {test, expect}= require("@playwright/test")


test("Alert handling", async ({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/")

    // Dialog (Alert) handler
    page.on("dialog", async (dialog) =>{
        await expect(dialog.type()).toBe("prompt")
        await expect(dialog.message()).toContain("Please enter your name:")
        await dialog.accept("Sourav")

    })

    await page.click("//button[text()='Prompt']")


    await page.waitForTimeout(5000)

    await expect(await page.locator("//p[@id='demo']").textContent()).toEqual("Hello Sourav! How are you today?")


})