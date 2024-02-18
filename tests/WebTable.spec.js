const { test, expect } = require("@playwright/test")


test("Webtable automation", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

    let webTableEle = await page.locator("//table[@name='BookTable']//tr")


    // const matchedRow= await webTableEle.filter({
    //         has: page.locator('td'),
    //         hasText: 'Learn JS'
    // })

    // const priceValues=await matchedRow.locator("td").all()
    // const price = await priceValues[3].textContent()
    // await expect(parseInt(price)).toBe(300)


    // let price;
    // for (let i = 1; i <= webTableEle.count(); i++) {

    //     const booknameEle = await webTableEle.nth(i).locator('td').all()

    //     const bookname = await booknameEle[0].textContent()

    //     if (await bookname === "Learn JS") {
    //         console.log("Hello from if block");
    //         price= await booknameEle[3].textContent()
    //         console.log("Price is : ", price);
    //     }

    // }


    // await expect(parseInt(price)).toBe(300)

})


test.only("Product webtable automation", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

    let pagination = await page.locator("#pagination li")
    let productTableRows = await page.locator("//table[@id='productTable']//tr")


    console.log(await productTableRows.count());


    let allProductDetails = []
    for (let p = 0; p < await pagination.count(); p++) {

        await pagination.nth(p).click()
        for (let i = 1; i < await productTableRows.count(); i++) {

            let eachProductDetail = []
            const tds = await productTableRows.nth(i).locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {

                const productDetail = await tds.nth(j).textContent()
                await eachProductDetail.push(productDetail)
            }

            await allProductDetails.push(eachProductDetail)

        }

    }

    console.log(allProductDetails)


})























