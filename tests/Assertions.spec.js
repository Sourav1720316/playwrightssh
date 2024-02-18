/*
expect(value).toBe()	Value is the same
expect(value).toBeCloseTo()	Number is approximately equal
expect(value).toBeDefined()	Value is not undefined
expect(value).toBeFalsy()	Value is falsy, e.g. false, 0, null, etc.
expect(value).toBeGreaterThan()	Number is more than
expect(value).toBeGreaterThanOrEqual()	Number is more than or equal
expect(value).toBeInstanceOf()	Object is an instance of a class
expect(value).toBeLessThan()	Number is less than
expect(value).toBeLessThanOrEqual()	Number is less than or equal
expect(value).toBeNaN()	Value is NaN
expect(value).toBeNull()	Value is null
expect(value).toBeTruthy()	Value is truthy, i.e. not false, 0, null, etc.
expect(value).toBeUndefined()	Value is undefined
expect(value).toContain()	String contains a substring
expect(value).toContain()	Array or set contains an element
expect(value).toContainEqual()	Array or set contains a similar element
expect(value).toEqual()	Value is similar - deep equality and pattern matching
expect(value).toHaveLength()	Array or string has length
expect(value).toHaveProperty()	Object has a property
expect(value).toMatch()	String matches a regular expression
expect(value).toMatchObject()	Object contains specified properties
expect(value).toStrictEqual()	Value is similar, including property types
expect(value).toThrow()	Function throws an error
expect(value).any()	Matches any instance of a class/primitive
expect(value).anything()	Matches anything
expect(value).arrayContaining()	Array contains specific elements
expect(value).closeTo()	Number is approximately equal
expect(value).objectContaining()	Object contains specific properties
expect(value).stringContaining()	String contains a substring
expect(value).stringMatching()	String matches a regular expression
*/




const{test, expect}= require("@playwright/test")
const { allowedNodeEnvironmentFlags } = require("process")

test("Assertion tests", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Hard Assertions
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).not.toHaveURL("https://opensource-demo.orangehrmlive.com/")

    const googleTextBox= await page.$$("//textarea[@name='q']")
    
    //Soft Assertions
    await expect.soft(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect.soft(page).not.toHaveURL("https://opensource-demo.orangehrmlive.com/")


})
