import { test, expect } from "@playwright/test";
test("Loging test", async ({ page }) => {
    const website =
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    const homepage =
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
    await page.goto(website);

    await page.locator("[name=username]").fill("admin");
    await page.locator("[name=password]").fill("admin123");
    await page.locator("[type=submit] ").click();
    await page.goto(homepage);
    test.setTimeout(20000);

    await page.locator("text=PIM").click();

    //search employee
    await page
        .locator("//div[@class = 'oxd-form-row']/descendant::input[1]")
        .fill("Farjana Akter");
    await page
        .locator("//form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i")
        .click();
    await page.locator("[class=oxd-form]").click();
    await page.locator("[type=submit]").click();

    await page.locator("text=Add Employee").click();

    //add employee
    await page.locator("//input[@name = 'firstName']").fill("Rahima");
    await page.locator("//input[@name = 'middleName']").fill("Akter");
    await page.locator("//input[@name = 'lastName']").fill("Sathi");

    await page
        .locator("//form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input")
        .fill("id100");

    await page.locator("[type=submit]").click();

    //created employee edit
    test.setTimeout(90000);

    await page.locator("[name=middleName]").fill("Akhi");

    //await page.locator("//div[2]/div[1]/div[2]/div/div[2]/input").fill("testing");
    await page.locator("//div[2]/div[1]/div/div[2]/input").fill("Fana171");

    await page
        .locator("//div[2]/div[2]/div/div[2]/div/div/input[1]")
        .fill("2025-30-06");
    await page.locator("//form/div[4]/button").click();

    await page.locator("text=Employee List").click();

    //Delete data
    //await page.locator("//div[10]/div/div[9]/div/button[2]/i").click();
    /*await page
    .locator('//div[@class = "orangehrm-modal-footer"]/child::button[2]')
    .click();*/

    //Scrolling and peginetion

    await page.evaluate(() => window.scrollBy(0, 1000));
    test.setTimeout(30000);

    await page.locator("i.bi-chevron-right").click();
});

test("employee", async ({ page }) => {
    await page.locator("text=PIM").click();

    await page
        .locator("div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")
        .click();
});
