import { test } from "@playwright/test";
import { login } from "../utils/login";
import { getEmployee } from "../utils/employeeData";

test.beforeEach(async ({ page }) => {
    await login(page);
    const emp = getEmployee();

    await page.click("text=PIM");
    await page.locator("//form/descendant::input[2]").fill(emp.id);
    await page.locator("button[type='submit']").click();
    await page.click(`text=${emp.firstName}`);
});

test("Edit Employee Middle Name", async ({ page }) => {
    await page.locator("input[name='middleName']").fill("Hossain");

    await page.locator("//form/div[2]/descendant::input[2]").fill("176632");
    await page.locator("//div[2]/div[1]/div/div[2]/input").fill("dr12552");
    await page.locator("//form/div[2]/descendant::input[4]").fill("2025-30-06");
    await page
        .locator("//div[2]/div[1]/div/div[2]/div/div/input")
        .fill("1997-30-05");

    await page.locator("//form/div[4]/button").click();
});
