const {test, expect}=require("@playwright/test")


test.skip("MouseHover practice", async({page}) => {


    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

    await page.hover("//a[text()='Selenium Practice']")

    await page.waitForTimeout(5000)


})


test.skip("Double click practice", async({page}) => {


    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

    await page.dblclick("//a[text()='Selenium Practice']")

    await page.waitForTimeout(5000)


})


test.skip("Right click practice", async({page}) => {

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

    const menuEle = await page.locator("//a[text()='Selenium Practice']")

    await menuEle.click({button : 'right'})

    await page.waitForTimeout(5000)


})

test("Drag and drop practice", async({page}) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")

    const pic=await page.locator("//h5[text()='High Tatras 2']/..")

    const trash= await page.locator("//span[text()='Trash']")

    await page.hover("//h5[text()='High Tatras 2']/..")

    await pic.dragTo(trash)

    await page.waitForTimeout(50000)


})
