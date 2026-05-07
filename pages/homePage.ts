import { Locator, Page } from "@playwright/test";

export class Homepage {
    readonly page: Page;
    readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('.logo_image');
    }

    async goto() {
        await this.page.goto('https://www.qa-practice.com/');
    }
}