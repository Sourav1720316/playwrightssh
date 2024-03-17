const{test, expect, chromium}=require("@playwright/test")


// test("Dropdown", async({page}) =>{


//         await page.goto("https://www.facebook.com/")

//         await page.getByRole("button", {name: "Create new account"}).click()

//         // const dateField=await page.locator("//select[@id='day']")
//         // const monthField=await page.locator("//select[@id='month']")
//         // const yearField=await page.locator("//select[@id='year']")

//         // await dateField.selectOption({value: "4"})
//         // await monthField.selectOption({label: "Feb"})
//         // await yearField.selectOption({index: 6})

//         const monthDropdown= await page.locator("//select[@id='month']")
//         await page.waitForSelector("//select[@id='month']")
//         await monthDropdown.click()
//         const monthField=await page.$$("//select[@id='month']/option")

//         for(const monthItem of monthField){
//             console.log(await monthItem);
//             const month=await monthItem.textContent()

//             if(await month==="Jul"){

//                 await monthItem.click()
//                 break
//             }
//         }

// })


// test("Handling frames", async({page}) =>{

//         await page.goto("https://demo.automationtesting.in/Frames.html")

//         //To switch over to a frame with locator
//         const frame=await page.frameLocator("//iframe[@id='singleframe']")
//         await frame.locator("//input[@type='text']").fill("Sourav")

//         //To get specified frame from a page
//         const pageFrame= await page.frame({url : "https://demo.automationtesting.in/MultipleFrames.html"})
//         const frame= await pageFrame.childFrames()
//         console.log(frame.length);

//         // To get all frames
//         const allFrames= await page.frames()
//         console.log(await allFrames.length);

//         await allFrames[1].locator("//input[@type='text']").fill("Sourav")

// })

// test("Handling alert", async({page}) => {
//         await page.goto("https://testautomationpractice.blogspot.com/")

//         await page.on("dialog", async(dialog) =>{

//                 const msg=await dialog.message()
//                 console.log(await msg);
//                 await dialog.accept("Sourav")

//         })

//         await page.locator("//button[text()='Prompt']").click()
// })


// test("Handling windows", async() => {

//         const browser = await chromium.launch()
//         const context = await browser.newContext()

//         const page= await context.newPage()

//         await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")

//         await page.click("//button[normalize-space(text())='Open Multiple Windows']")

//         // const pagePromise= await context.waitForEvent('page')

//         // const newpage= await pagePromise

//         const newPages= await context.pages()

//         console.log(await newPages.length);

//         for(let i=0;i< await newPages.length;i++){

//             console.log(await newPages[i].title());
//         }
//         // const pagetitle=await newpage.title()

//         // console.log(pagetitle);

// })

// test("Upload files", async({page}) => {

//      await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

//      const upload= await page.locator("//input[@type='file']")
//      await upload.setInputFiles(["C:/Users/Sourav/Downloads/Upload/Dummy.txt", 
//                                                                 "C:/Users/Sourav/Downloads/Upload/Dummy2.txt"])

//      await page.waitForTimeout(5000)

//      await upload.setInputFiles([])
// })


// test("test2@sanity", async({page}) =>{

//     console.log("This is test 2");

// })

// test("test3@reg", async({page}) =>{

//     console.log("This is test 3");

// })

// test("test4@smoke@uat", async({page}) =>{

//     console.log("This is test 4");

// })


// test.describe("Grp 1 @high", () => {

//     test("Test 1", async({page}) => {

//         console.log("Test 1");
//     })

//     test("Test 2", async({page}) => {

//         console.log("Test 2");
//     })

//     test("Test 3", async({page}) => {

//         console.log("Test 3");
//     })
// })

// test("Mouse hover test", async({page}) => {

//     await page.goto("https://stqatools.com/demo/MouseHover.php")
//     await page.locator("//button[text()='Mouse Hover DropDown']").hover()
//     await page.click("//a[text()='Link 2']")
//     await page.waitForTimeout(5000)
// })

// test("drag and drop test", async({page}) => {

//     await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")

//     const frame=await page.frameLocator("//iframe[@class='demo-frame lazyloaded']")
//     const pic= await frame.locator("//h5[text()='High Tatras']")
//     const trash= await frame.locator("//div[@id='trash']")
//     await pic.dragTo(trash)

//     await page.waitForTimeout(5000)
// })

// test("Right click test", async({page}) => {

//     await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

//     await page.waitForSelector("//span[text()='right click me']")

//     const rightCLickBtn= await page.locator("//span[text()='right click me']")
//     await rightCLickBtn.click({button : 'right'})

//     await page.waitForTimeout(5000)
// })

// test("Double click test", async({page}) => {

//     await page.goto("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")

//     await page.waitForSelector("//div[@id='box']")

//     const doubleClickBox= await page.locator("//div[@id='box']")
//     await doubleClickBox.dblclick()

//     await page.waitForTimeout(5000)
// })

// test("Keyboard actions test", async({page}) => {

//     await page.goto("https://gotranscript.com/text-compare")

//     await page.locator("//textarea[@name='text1']").fill("Sourav")

//     await page.keyboard.press("Control+A")

//     await page.keyboard.press("Control+C")

//     await page.keyboard.press("Tab")

//     await page.keyboard.press("Control+V")

//     await page.waitForTimeout(5000)
// })

// test("Tags tests1 @smoke", async({page}) => {

//         console.log("Test 1");

// })

// test("Tags tests2 @regression", async({page}) => {

//     console.log("Test 2");

// })

// test("Tags tests3 @smoke", async({page}) => {

//     console.log("Test 3");

// })

