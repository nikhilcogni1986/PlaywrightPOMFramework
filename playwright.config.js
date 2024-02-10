const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    reporter:  [
                ['allure-playwright', {outputFolder: 'my-allure-results'}]
               ],
    fullyParallel: false,
    projects:
        [
            {
                name: "Chrome",
                use:
                    {
                        browserName: "chromium",
                        headless: false,
                        screenshot: 'only-on-failure',
                        video: 'off'
                    }
            }
        ]
});