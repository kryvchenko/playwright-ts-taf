import { CustomerData } from "@/types/gen-t";
import { debounceDom } from "@/utils/utils";
import { Locator, Page } from "@playwright/test";

export default class CartPage {
  // Pages
  page: Page;
  // Buttons & Links
  miniCartLink: Locator;
  proceedToCheckoutButton: Locator;
  nextButton: Locator;
  placeOrderButton: Locator;
  // Form elements
  customerEmail: Locator;
  firstName: Locator;
  lastName: Locator;
  company: Locator;
  street: Locator;
  city: Locator;
  state: Locator;
  zipCode: Locator;
  country: Locator;
  phone: Locator;
  tableRate: Locator;
  fixedRate: Locator;
  // General
  cartCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartCounter = page.locator(".counter-number");
    this.miniCartLink = page.locator(".minicart-wrapper");
    this.proceedToCheckoutButton = page.locator("#top-cart-btn-checkout");
    this.customerEmail = page.locator(
      "[data-role='email-with-possible-login'] #customer-email",
    );
    this.firstName = page.locator("[name='firstname']");
    this.lastName = page.locator("[name='lastname']");
    this.company = page.locator("[name='company']");
    this.street = page.locator("[name='street[0]']");
    this.city = page.locator("[name='city']");
    this.state = page.locator("[name='region_id']");
    this.zipCode = page.locator("[name='postcode']");
    this.country = page.locator("[name='country_id']");
    this.phone = page.locator("[name='telephone']");
    this.tableRate = page.locator("[value='tablerate_bestway']");
    this.fixedRate = page.locator("[value='flatrate_flatrate']");
    this.nextButton = page.getByRole("button", { name: "Next" });
    this.placeOrderButton = page.getByRole("button", { name: "Place Order" });
  }

  async proceedToCheckout() {
    await this.miniCartLink.click();
    await debounceDom(this.page);
    await this.proceedToCheckoutButton.click();
  }

  async fillCheckoutForm(customerData: CustomerData, rate: string) {
    if (customerData.email)
      await this.customerEmail.first().fill(customerData.email);
    if (customerData.firstName)
      await this.firstName.fill(customerData.firstName);
    if (customerData.lastName) await this.lastName.fill(customerData.lastName);
    if (customerData.company) await this.company.fill(customerData.company);
    await this.street.fill(customerData.street);
    await this.city.fill(customerData.city);
    await this.state.selectOption(customerData.state);
    await this.zipCode.fill(customerData.zipCode);
    await this.country.selectOption(customerData.country);
    await this.phone.fill(customerData.phone);
    if (rate === "Table Rate") await this.tableRate.click();
    if (rate === "Fixed") await this.fixedRate.click();
    await this.nextButton.click();
    await this.placeOrderButton.click();
  }
}
