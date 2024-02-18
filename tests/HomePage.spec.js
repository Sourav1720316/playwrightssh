const {test, expect}=require("@playwright/test");

// Async and awaits are used as javascript is an asynchronous language that is all steps of a test will run parallely without
// Waiting for the previous one to finish. Hence async and await is used to make the steps dependant on each other.
// or wait for the previous step to finish. Here comes the concept of promise. Async keyword will make the function return
// a promise. While await keyword will make the function wait for the promise to finish.


test('Home page test', async ({page}) =>{

        await page.goto("http://www.google.com");

        const pageTitle = await page.title();

        await expect(page).toHaveTitle("Google");

        page.close();
});