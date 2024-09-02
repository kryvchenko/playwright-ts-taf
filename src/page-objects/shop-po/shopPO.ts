import { expect, Locator, Page } from "@playwright/test";
import AccountPage from "../account-po/accountPO";

export default class ShopPage {
  // Pages
  page: Page;
  accountPage!: AccountPage;
  // Buttons & Links
  addToCartButton: Locator;
  // Products
  productCards: Locator;
  productImage: Locator;
  // General
  quantity: Locator;
  pricesOnCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountPage = new AccountPage(page);
    this.productCards = page.locator(".product-item-info");
    this.productImage = page.locator(".product-image-container");
    this.pricesOnCards = page.locator(".normal-price");
    this.quantity = page.locator("#qty");
    this.addToCartButton = page.getByTitle("Add to Cart");
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
      await this.page
        .locator(".swatch-option.text")
        .getByText(size, { exact: true })
        .click();
    }
    if (color) {
      await this.page
        .locator(`.swatch-option.color[aria-label=${color}]`)
        .click();
    }
    await this.quantity.fill(numberOfItems);
    await this.addToCartButton.click();
    await expect(this.accountPage.alertMessage).toBeVisible();
  }
}
