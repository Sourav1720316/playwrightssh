const {test, expect}=require("@playwright/test")


test("test1", async({page}) =>{
        test.skip()
        console.log("This is test 1...");

})

test("test2", async({page}) =>{

    console.log("This is test 2...");

})


test.only("test3", async({page}) =>{

    console.log("This is test 3...");

})


test("test4", async({page}) =>{
    if(1===1){

        test.skip()   // Conditional skipping
    }
    console.log("This is test 4...");

})


test("test5", async({page}) =>{
    
    test.fixme()
    console.log("This is test 5...");

})

test("test6", async({page}) =>{
    
    test.fail()  //This means this test is expecting failure. Used to test negative scenarios.
                 // So if the test passes then this will actually throw a failure.
    console.log("This is test 6...");

})


test("test7", async({page}) =>{
    
    test.slow() // Default playwright timeout is 30s. However if we use test.slow() then for this particular test the timeout
                // will become 3 times of the timeout configured in playwright.config file.
    console.log("This is test 7...");

})

test("test8", async({page}) =>{
    
    test.setTimeout(5000)  // Used to set the timeout for this particular test
    console.log("This is test 8...");

})