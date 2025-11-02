# Saucedemo Playwright TypeScript Automation

Project Overview :->
This project automates key scenarios of the [SauceDemo](https://www.saucedemo.com/) web app using Playwright with TypeScript.  
It follows the Page Object Model (POM) for clean code and modular design.  
The framework supports cross-browser testing, parallel execution, and generates HTML reports.



 Scenarios Covered:->
1. Login and add 1 product to cart
2. Add 2 products then remove 1 
3. Print product names (visual_user) 
4. Print product names and prices (visual_user)  
5. Verify unauthenticated redirect to login page.



 Tech Stack :->
- Playwright  
- TypeScript  
- Node.js  
- HTML Reporter  



 How to Run:->

 Install dependencies:->
```bash
npm install

Run all tests:->
npm test

Run in specific browser:->
npx playwright test --project=chromium
npx playwright test --project=firefox

Playwright Configuration:->

projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  // { name: 'webkit', use: { ...devices['Desktop Safari'] } }, // commented out
],

 -> Why WebKit is Commented Out.

The WebKit project (Safari engine) was commented out because:

Tests were flaky and unstable due to timeout and memory issues on Windows.

Some browser context initialization errors (Target page closed, Timeout exceeded) occurred repeatedly.


 Final Notes:

All scenarios passed successfully in Chromium and Firefox.

Reports, screenshots, videos, and traces are generated automatically on test failures.

WebKit can be re-enabled anytime for additional coverage once stability improves.