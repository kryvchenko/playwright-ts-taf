import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: require.resolve('./environments/playwright-global-setup'),
  testDir: "./src/tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */

    // Timeout for each assertion:
    timeout: 15000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? "blob" : [["html", { open: "never" }]],
  /* Shared settings for all the projects below */
  use: {
    screenshot: { mode: "on", omitBackground: true },
    /* Collect trace when retrying the failed test */
    trace: process.env.CI ? "retain-on-failure" : "on",
    video: process.env.CI ? "retain-on-failure" : "on",
    actionTimeout: 25000,
    navigationTimeout: 60000,
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    }
  ],
});
