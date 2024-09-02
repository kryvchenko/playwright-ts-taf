import { test as base } from "@playwright/test";
import AuthPage from "./auth-po/authPO";
import CartPage from "./cart-po/cartPO";
import NavigationPage from "./navigation-po/navigationPO";
import { PageObjects } from "../types/base-t";
import AccountPage from "./account-po/accountPO";
import ShopPage from "./shop-po/shopPO";

export const test = base.extend<PageObjects>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
});
