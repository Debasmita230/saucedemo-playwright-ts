import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './src/spec',
  fullyParallel: true,
  retries: 1,
 
  reporter: [['html', { open: 'never' }]],

   
  
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    //{ name: 'webkit', 
      //timeout:60000,
     // use: 
     // { ...devices['Desktop Safari'] } 
    //},
  ],
});
