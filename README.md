# 71 101 110 101 115 121 115 E2E Test Automation Framework

This repository contains an end-to-end (E2E) test automation framework built with TypeScript and Playwright, designed to test e-commerce applications.

## Test status badge: [![Playwright](https://github.com/kryvchenko/playwright-ts-taf/actions/workflows/playwright.yml/badge.svg)](https://github.com/kryvchenko/playwright-ts-taf/actions/workflows/playwright.yml)

## Features

- **Page Object Model**: Separation of locators and methods from spec files for better maintainability.
- **Multiple Environments**: Environment variables managed through global setup.
- **Cross-Browser Testing**: Supports multiple projects across various browsers for test execution.
- **Utilities & Helpers**: Common useful methods organized in the `utils` directory.
- **TypeScript Support**: Type checking and TypeScript-specific features.
- **Linters & Formatters**: ESLint and Prettier for code quality and consistency.
- **Pre-Commit Hooks**: Husky integration to enforce quality checks before commits.
- **Continuous Integration**: GitHub Actions workflow and Jenkins integration.
- **Custom Scripts**: Easy-to-use npm scripts for test execution.

## Installation

1. Clone the repository
   `git clone git@github.com:kryvchenko/playwright-ts-taf.git`
2. Install dependencies with
   `npm install`
3. To run test in headless mode in chrome browser
   `npm run test-chrome`
4. To run smoke tests
   `npm run smoke`
5. Run prettier with write flag:
   `npm run prettier:fix`

## Jenkins Setup

1. Make sure that NodeJS Plugin is installed
2. Java JDK PATH is added

## Running job in Jenkins locally

1. Create a new pipeline
2. Pipeline script from SCM
3. SCM (Git)
4. Change a path to Jenkins file `Jenkinsfile`
5. Use the current repo URL

## Running job from Docker

1. Clone this repo and `cd /path/to/your/project`
2. Build the image `docker build -t my-playwright-tests .`
3. Run container `docker run --rm my-playwright-tests`

## Docker troubleshooting

1. Check Docker Logs: `docker logs <container_id>`
2. Interactive Debugging: `docker run -it --entrypoint /bin/bash my-playwright-tests`

## TODO

1. Create a test strategy and automation plan for entire application including critical path and regression tests
2. Develop API methods for account creation/deletion and other time consuming tasks
3. Add mechanism for secure storage of sensitive data
