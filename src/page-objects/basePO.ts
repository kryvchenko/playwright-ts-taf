import { test as base } from "@playwright/test";
import AuthPage from "./auth-po/authPO";
import CheckoutPage from "./checkout-po/checkoutPO";
import CartPage from "./cart-po/cartPO";
import CategoriesPage from "./categories-po/categoriesPO";
import NavigationPage from "./navigation-po/navigationPO";
import { PageObjects } from "../types/base-t";

export const test = base.extend<PageObjects>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  categoriesPage: async ({ page }, use) => {
    await use(new CategoriesPage(page));
  },
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
});
