const {test, expect}=require("@playwright/test")


test("test1@smoke", async({page}) =>{

    console.log("This is test 1");

})

test("test2@sanity", async({page}) =>{

    console.log("This is test 2");

})

test("test3@reg", async({page}) =>{

    console.log("This is test 3");

})

test("test4@smoke@register", async({page}) =>{

    console.log("This is test 4");

})