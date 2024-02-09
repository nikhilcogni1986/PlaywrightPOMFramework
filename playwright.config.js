// @ts-check
const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    reporter: 'html',
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