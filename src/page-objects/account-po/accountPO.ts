import { Locator, Page } from "@playwright/test";

export default class AccountPage {
  // Pages
  page: Page;
  // General
  alertMessage: Locator;
  userInformation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertMessage = page.locator(".message-success");
    this.userInformation = page.locator(".box.box-information");
  }
}
