import { test } from "@playwright/test";
import { login } from "../utils/login";
import { faker } from "@faker-js/faker";

test("Create 30 employees and paginate", async ({ page }) => {
    await login(page);
    await page.click("text=PIM");

    for (let i = 0; i < 5; i++) {
        await page.click("text=Add Employee");
        const id = `id${Date.now().toString().slice(-3)}${i}`;

        await page
            .locator("input[name='firstName']")
            .fill(faker.person.firstName());
        await page
            .locator("input[name='middleName']")
            .fill(faker.person.middleName());
        await page
            .locator("input[name='lastName']")
            .fill(faker.person.lastName());
        await page.locator("//form/div[1]/descendant::input[5]").fill(id);
        await page.locator("[type=submit]").click();

        await page.waitForSelector("text=Personal Details");
        await page.click("text=PIM"); // return to list for next iteration
    }

    await page.evaluate(() => window.scrollBy(0, 2000));
    await page.locator("i.bi-chevron-right").click();
});
