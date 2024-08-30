import AuthPage from "../page-objects/auth-po/authPO";
import CartPage from "../page-objects/cart-po/cartPO";
import CategoriesPage from "../page-objects/categories-po/categoriesPO";
import CheckoutPage from "../page-objects/checkout-po/checkoutPO";
import NavigationPage from "../page-objects/navigation-po/navigationPO";

export type PageObjects = {
  authPage: AuthPage;
  checkoutPage: CheckoutPage;
  cartPage: CartPage;
  categoriesPage: CategoriesPage;
  navigationPage: NavigationPage;
};
