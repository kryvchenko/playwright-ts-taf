import { Locator, Page } from "@playwright/test";

export default class NavigationPage {
  // Pages
  page: Page;

  // Link & Buttons
  // newMenuLink: Locator;
  // womanMenuLink: Locator;
  // manMenuLink: Locator;
  // gearMenuLink: Locator;
  // trainingMenuLink: Locator;
  saleMenuLink: Locator;
  bagsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saleMenuLink = page.getByRole("menuitem", { name: "Sale" });
    this.bagsLink = page.getByRole("link", { name: "Bags" });
  }
}
