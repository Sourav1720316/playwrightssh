const {test, expect}=require("@playwright/test")
const exp = require("constants")


test("Practice actions", async ({page}) =>{

        await page.goto("https://testautomationpractice.blogspot.com/")

        // await page.getByRole("input", {id : "name"}).fill("Sourav Das")

        const nameField=await page.locator("//input[@id='name']")
        await nameField.fill("Sourav Das")

    /*    await expect(nameField.textContent()).toEqual("Sourav Das")

        // const allCheckbox=await page.$$("//div[@class='form-group']/label[text()='Days:']//following-sibling::div/input")

        // Selecting all checboxes

        // for(const eachCheckbox of allCheckbox){

        //     await eachCheckbox.click()
        // }

        const selectionDays = ["Sunday", "Wednesday", "Saturday"]

        for(const day of selectionDays)      {

            await page.click("//label[text()='"+day+"']/preceding-sibling::input")
        }

        // await expect(page.locator("//label[text()='"+selectionDays[0]+"']/preceding-sibling::input")).toBeChecked()

        await expect(page.locator("//label[text()='"+selectionDays[0]+"']/preceding-sibling::input").isChecked()).toBeTruthy()*/
        

        const countryDropdown=await page.locator("#country")

        await countryDropdown.selectOption({label: "France"})

        await countryDropdown.selectOption({value: "india"})

        await countryDropdown.selectOption({index: 2})

        // const allCountries= await countryDropdown.textContent()

        // await expect(allCountries.includes("France")).toBeTruthy()


        const countryDrop=await page.$$("//select[@id='country']/option")

        let status= false

        for(const country of countryDrop){

            let countryName = await country.textContent()

            if(countryName.includes("India")){

                status=true
                break
            }

        }

        await expect(status).toBeTruthy()

        await expect(countryDrop.length).toEqual(10)

        await page.waitForTimeout(5000)

})