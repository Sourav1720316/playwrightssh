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

    const frame=await page.frameLocator("//iframe[@class='demo-frame lazyloaded']")
    const pic= await frame.locator("//h5[text()='High Tatras']")
    const trash= await frame.locator("//div[@id='trash']")
    await pic.dragTo(trash)
})
