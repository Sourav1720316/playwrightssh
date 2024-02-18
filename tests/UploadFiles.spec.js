const {test, expect}=require("@playwright/test")


test("Single file upload", async({page}) =>{


        await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

        await page.locator("//input[@name='upfile']").setInputFiles("C:/Users/Sourav/Downloads/Upload/Dummy.txt")

        await page.waitForTimeout(5000)

})


test.only("Multiple file upload", async({page}) =>{


    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("//input[@name='filesToUpload']").setInputFiles(["C:/Users/Sourav/Downloads/Upload/Dummy.txt",
                                                                        "C:/Users/Sourav/Downloads/Upload/Dummy2.txt"])


    await page.waitForTimeout(2000)
    // Removing files

    await page.locator("//input[@name='filesToUpload']").setInputFiles([])
    await page.waitForTimeout(5000)

})