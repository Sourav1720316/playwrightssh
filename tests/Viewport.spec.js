const {test, expect}=require("@playwright/test")


test.use({viewport:{width: 1920, height:1080}})  // This is spec fie specific

test("test1", async({page}) =>{
        test.skip()
        console.log("This is test 1...");

})