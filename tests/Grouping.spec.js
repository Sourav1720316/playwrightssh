const { test, expect } = require("@playwright/test")


test.beforeAll(async() => {

        console.log("This is before all");
})

test.afterAll(async() => {

    console.log("This is after all");
})

test.beforeEach(async()=>{

        console.log("This is before each");
})

test.afterEach(async()=>{

    console.log("This is after each");
})

test.describe('Group 1', () => {

    test("Test 1", async ({ page }) => {

        console.log("i am group 1 test 1")
    })

    test("Test 2", async ({ page }) => {

        console.log("i am group 1 test 2")
    })

})

test.describe('Group 2', () => {

    test("Test 3", async ({ page }) => {

        console.log("i am group 2 test 1")
    })

    test("Test 4", async ({ page }) => {

        console.log("i am group 2 test 2")
    })

})
