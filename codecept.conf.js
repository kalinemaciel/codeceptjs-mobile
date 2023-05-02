const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'codeceptjs - automation',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: {
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
        appPackage: process.env.PLATFORM == "Android" ? process.env.PACKAGE : "",
        appActivity: process.env.PLATFORM == "Android" ? process.env.ACTIVITY : "",
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
    home_page: "./pages/home_page.js"
  }
}