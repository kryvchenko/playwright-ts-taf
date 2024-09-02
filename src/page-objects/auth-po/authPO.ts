import { apiConfig, payload } from "@/data/api-test-data";
import { debounceDom } from "@/utils/utils";
import { expect, Locator, Page, request } from "@playwright/test";

export default class AuthPage {
  // Pages
  page: Page;
  // Buttons & Links
  createAccountButton: Locator;
  actionMenu: Locator;
  signInLink: Locator;
  signInButton: Locator;
  signOutLink: Locator;
  submitForm: Locator;
  // Form elements
  firstNameInput: Locator;
  lastNameInput: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  confirmPasswordInput: Locator;
  passwordError: Locator;
  firstNameError: Locator;
  lastNameError: Locator;
  emailError: Locator;
  userEmail: Locator;
  userPassword: Locator;
  // General
  pageTitle: Locator;
  welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createAccountButton = page.getByRole("link", {
      name: "Create an Account",
    });
    this.firstNameInput = page.locator("#firstname");
    this.lastNameInput = page.locator("#lastname");
    this.emailInput = page.locator("#email_address");
    this.passwordInput = page.locator("#password");
    this.confirmPasswordInput = page.locator("#password-confirmation");
    this.pageTitle = page.locator(".page-title");
    this.submitForm = page.getByTitle("Create an Account");
    this.firstNameError = page.locator("#firstname-error");
    this.lastNameError = page.locator("#lastname-error");
    this.emailError = page.locator("#email_address-error");
    this.passwordError = page.locator("#password-error");
    this.actionMenu = page.getByRole("button", { name: /Change/i });
    this.signInLink = page.getByRole("link", { name: /Sign In/i });
    this.signInButton = page.getByRole("button", { name: /Sign In/i });
    this.signOutLink = page.getByRole("link", { name: /Sign Out/i });
    this.userEmail = page.getByTitle("Email");
    this.userPassword = page.getByTitle("Password");
    this.welcomeMessage = page.locator(".panel.wrapper").locator(".logged-in");
  }

  async addNewAccount(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.submitForm.click();
  }

  async signIn(email: string, password: string) {
    await this.signInLink.click();
    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.signInButton.click();
  }

  async signOut() {
    await this.actionMenu.first().click();
    await debounceDom(this.page);
    await this.signOutLink.click();
    await expect(this.pageTitle).toContainText("You are signed out");
  }

  async addNewAccountViaAPI() {
    // Create a request context
    const apiContext = await request.newContext(apiConfig);

    // Perform the POST request
    const response = await apiContext.post("/customer/account/createpost/", {
      data: payload,
    });

    // Log the response status and body
    console.log(`Status: ${response.status()}`);

    // Dispose of the request context
    await apiContext.dispose();
  }
}
