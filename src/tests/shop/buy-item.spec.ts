import { fakeCredentials } from "@/constants/auth-const";
import {
  confirmation,
  customerData,
  existingCustomerData,
  numberOfItems,
  productBags,
  shippingType,
} from "@/constants/shop-const";
import { test } from "@/page-objects/basePO";
import { generateRandomString } from "@/utils/utils";
import { expect } from "@playwright/test";

test.describe("Sigh up flow validation", async () => {
  let randomEmail: string;

  test.beforeAll(async () => {
    randomEmail = `${generateRandomString()}${fakeCredentials.EMAIL_SUFFIX}`;
  });

  test.beforeEach(async ({ page, navigationPage }) => {
    // Navigate to sales tab
    await page.goto(`${process.env.FRONT_END_URL}`);
    await navigationPage.saleMenuLink.click();
  });

  test("Verify that unregistered can buy the product @smoke", async ({
    shopPage,
    navigationPage,
    cartPage,
    authPage,
  }) => {
    // Add Bag to the cart
    await navigationPage.bagsLink.click();
    await shopPage.addProductToCart(
      productBags.MESSENGER_BAG,
      numberOfItems.ONE,
    );
    await expect(cartPage.cartCounter).toHaveText(numberOfItems.ONE);
    // Checkout
    await cartPage.proceedToCheckout();
    await cartPage.fillCheckoutForm(customerData, shippingType.FIXED);
    await expect(authPage.pageTitle).toHaveText(confirmation.ORDER_PLACED);
  });

  test("Verify that registered can buy the product @smoke", async ({
    shopPage,
    navigationPage,
    cartPage,
    authPage,
  }) => {
    await authPage.createAccountButton.click();
    await authPage.addNewAccount(
      fakeCredentials.FIRST_NAME,
      fakeCredentials.LAST_NAME,
      randomEmail,
      fakeCredentials.PASSWORD,
    );
    // Add Bag to the cart
    await navigationPage.saleMenuLink.click();
    await navigationPage.bagsLink.click();
    await shopPage.addProductToCart(
      productBags.MESSENGER_BAG,
      numberOfItems.ONE,
    );
    await expect(cartPage.cartCounter).toHaveText(numberOfItems.ONE);
    // Checkout
    await cartPage.proceedToCheckout();
    await cartPage.fillCheckoutForm(existingCustomerData, shippingType.FIXED);
    await expect(authPage.pageTitle).toHaveText(confirmation.ORDER_PLACED);
  });
});
