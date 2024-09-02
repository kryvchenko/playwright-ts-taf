import { expect, Locator, Page } from "@playwright/test";

export default class ShopPage {
  // Pages
  page: Page;
  // Products
  productCards: Locator;
  // General
  quantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator(".product-item-details");
    this.quantity = page.locator("#qty");
  }

  async addProductToCart(
    productName: string,
    numberOfItems: string,
    size?: string,
    color?: string,
  ) {
    // Locate the product card containing the desired product name
    const productCard = this.productCards.filter({ hasText: productName });
    await expect(productCard).toHaveCount(1);
    await productCard.click();
    if (await productCard.getByRole("option", { name: size }).isVisible()) {
      await productCard.getByRole("option", { name: size }).click();
    }
    if (await productCard.getByRole("option", { name: color }).isVisible()) {
      await productCard.getByRole("option", { name: color }).click();
    }
    await this.quantity.fill(numberOfItems);
    await this.page.getByTitle("Add to Cart").click();
  }
}
