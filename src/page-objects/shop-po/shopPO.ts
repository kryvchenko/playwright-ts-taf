import { expect, Locator, Page } from "@playwright/test";

export default class ShopPage {
  // Pages
  page: Page;
  // Products
  productCards: Locator;
  productImage: Locator;
  // General
  quantity: Locator;
  pricesOnCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator(".product-item-info");
    this.productImage = page.locator(".product-image-container");
    this.pricesOnCards = page.locator(".normal-price");
    this.quantity = page.locator("#qty");
  }

  async addProductToCart(
    productName: string,
    numberOfItems: string,
    size?: string,
    color?: string,
  ) {
    const productCard = this.productCards.filter({
      hasText: productName,
    });
    await expect(productCard).toHaveCount(1);
    await productCard.locator(this.productImage).click();
    if (size) {
      await this.page.locator(".swatch-option.text", { hasText: size }).click();
    }
    if (color) {
      await this.page
        .locator(`.swatch-option.color[aria-label=${color}]`)
        .click();
    }
    await this.quantity.fill(numberOfItems);
    await this.page.getByTitle("Add to Cart").click();
  }
}
