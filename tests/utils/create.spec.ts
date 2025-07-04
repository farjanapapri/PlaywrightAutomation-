import { test, expect } from "@playwright/test";
import { login } from "./login";
import { generateEmployee } from "./employeeData";

test("Create Employee", async ({ page }) => {
    await login(page);
    const employee = generateEmployee();

    await page.click("text=PIM");
    await page.click("text=Add Employee");

    await page.locator("input[name='firstName']").fill(employee.firstName);
    await page.locator("input[name='middleName']").fill(employee.middleName);
    await page.locator("input[name='lastName']").fill(employee.lastName);
    await page.locator("//form/div[1]/descendant::input[5]").fill(employee.id);

    await page.locator("[type=submit]").click();
    //await expect(page).toHaveURL(/personalDetails/);
});
