import { Page } from "@playwright/test";

export async function login(page: Page) {
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    const homepage =
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
    await page.locator("[name=username]").fill("admin");
    await page.locator("[name=password]").fill("admin123");
    await page.locator("[type=submit]").click();
    await page.waitForURL(homepage);
}
