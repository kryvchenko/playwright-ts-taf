import AccountPage from "@/page-objects/account-po/accountPO";
import AuthPage from "../page-objects/auth-po/authPO";
import CartPage from "../page-objects/cart-po/cartPO";
import NavigationPage from "../page-objects/navigation-po/navigationPO";
import CheckoutPage from "@/page-objects/shop-po/shopPO";

export type PageObjects = {
  authPage: AuthPage;
  shopPage: CheckoutPage;
  cartPage: CartPage;
  navigationPage: NavigationPage;
  accountPage: AccountPage;
};
