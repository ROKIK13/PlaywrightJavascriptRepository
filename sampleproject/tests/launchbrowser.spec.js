const {test,expect} = require("@playwright/test")

test("Launch Browser and Capture URL and Title",async({page})=>{
await page.goto("")
})