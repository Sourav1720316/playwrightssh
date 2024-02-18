// const{test,expect}=require("@playwright/test")

//Alternate way to import

import{test, expect} from '@playwright/test'


test("Locators test", async({ page }) => {

        await page.goto("https://www.google.com/")
        const pageTitle= await page.title()

        console.log(pageTitle);

        await expect(pageTitle).toBe("Google")

        const googleTextBox= await page.locator("//textarea[@name='q']")
        await googleTextBox.click()
        await googleTextBox.clear()
        await googleTextBox.fill("playwright")
        
        await page.click("//img[@alt='Google']")

        await page.click("(//input[@value='Google Search'])[2]")

        await page.waitForSelector("//a/h3")
        const allLinks= await page.$$("//a/h3")

        console.log(allLinks.length);
        for(const link of allLinks){

                const linktext= await link.textContent()
                console.log(linktext);
        }


})


