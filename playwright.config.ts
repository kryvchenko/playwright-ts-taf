import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: require.resolve("./environments/playwright-global-setup"),
  testDir: "./src/tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout: 90 * 1000,
  expect: {
    // Timeout for each assertion:
    timeout: 15000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 1,
  reporter: [["html", { outputFolder: "playwright-report" }]],
  /* Shared settings for all the projects below */
  use: {
    screenshot: { mode: "on", omitBackground: true },
    /* Collect trace when retrying the failed test */
    trace: process.env.CI ? "retain-on-failure" : "on",
    video: process.env.CI ? "retain-on-failure" : "on",
    actionTimeout: 25000,
    navigationTimeout: 60000,
  },
  /* Configure projects for different browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
