const { test, expect } = require("@playwright/test")
import { LoginPage } from '../Pages/Login'
import { HomePage } from '../Pages/HomePage'

import { BaseClass } from '../Pages/BaseClass'

const alldata = JSON.parse(JSON.stringify(require("../testlogin.json")))

// import {LoginPage}   from  '../Pages/Login'


test.describe("Application login", () => {


        for (const data of alldata) {

                test.describe(`Application login ${data.menuitem}`, () => {
                        let page;
                        test.beforeAll("Setup", async ({ browser }) => {
                                page = await browser.newPage()
                                const base = new BaseClass(page)
                                await base.setup()
                        })

                        test.afterAll(async () => {

                                await page.close()

                        })


                        test("Test Freelance application Login", async () => {

                                const loginPage = new LoginPage(page)
                                await loginPage.loginToApplication(data.username, data.password)

                        })

                        test("Test Freelance application home page", async () => {

                                const homePage = new HomePage(page)
                                await homePage.timeatworkWidget()
                                await homePage.enterValueInSearchField(data.menuitem)
                        })

                })
        }

})
