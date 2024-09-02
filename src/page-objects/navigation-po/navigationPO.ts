import { Locator, Page } from "@playwright/test";

export default class NavigationPage {
  // Pages
  page: Page;

  // Link & Buttons
  saleMenuLink: Locator;
  bagsLink: Locator;
  jacketsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saleMenuLink = page.getByRole("menuitem", { name: "Sale" });
    this.bagsLink = page.getByRole("link", { name: "Bags" });
    this.jacketsLink = page.getByRole("link", { name: "Jackets" });
  }
}
