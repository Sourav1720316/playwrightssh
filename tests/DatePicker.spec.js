const { test, expect } = require("@playwright/test")


test("Date picker automation", async ({ page }) => {


    const year = "2024"
    const month = "October"
    await page.goto("https://testautomationpractice.blogspot.com/")

    const dateField = await page.locator("#datepicker")
    await dateField.scrollIntoViewIfNeeded()
    await dateField.click()


    while (true) {

        const dateYear = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const monthYear = await page.locator("//span[@class='ui-datepicker-month']").textContent()

        if (dateYear === year && monthYear === month) {

            break;

        }

        await page.locator("//div[contains(@style,'display: block')]//span[text()='Next']").click()

    }


    await  page.locator("//div[contains(@style,'display: block')]//a[text()='15']").click()


})