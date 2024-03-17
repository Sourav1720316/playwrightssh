const { test, expect } = require("@playwright/test")
import { Base } from "../Pages_Magneto/Base"
import { LandingPage } from "../Pages_Magneto/LandingPage"
import { Login } from "../Pages_Magneto/Login"
import { Home } from "../Pages_Magneto/Home"
import { Jackets } from "../Pages_Magneto/jackets"

const data = JSON.parse(JSON.stringify(require("../testdataMagneto.json")))


test.describe("Magneto Application Login", () => {

    let page;
    test.beforeAll("Setup", async ({ browser }) => {
        page = await browser.newPage()
        const base = new Base(page)
        await base.launchApplication(data.url)
    })

    test.afterAll("Teardown", async () => {
        await page.close()
    })


    test("Verify login", async () => {
        const landingpage = new LandingPage(page)
        await landingpage.clickOnSignin()

        const login = new Login(page)
        await login.LoginToApplication(data.emailid, data.password)

        const home = new Home(page)
        await home.pageTitle()
        await home.selectOption(data.mainitem, data.subitem, data.product)

        const jackets = new Jackets(page)
        await jackets.fetchAllProductPrice()


    })

})
