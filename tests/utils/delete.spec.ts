import { test } from "@playwright/test";
import { login } from "../utils/login";
import { getEmployee } from "../utils/employeeData";

test.beforeEach(async ({ page }) => {
    await login(page);
    const emp = getEmployee();

    await page.click("text=PIM");
    await page.locator("//form/descendant::input[2]").fill(emp.id);
    await page.locator("button[type='submit']").click();
});

test("Delete Employee", async ({ page }) => {
    await page.locator("i.bi-trash").first().click();
    await page
        .locator(".orangehrm-modal-footer button:has-text('Yes, Delete')")
        .click();
});
