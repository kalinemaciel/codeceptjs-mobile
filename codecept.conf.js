const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'caminho da apk',
      desiredCapabilities: {
        appPackage: '',
        appActivity: '',
        deviceName: 'qa_test',
        platformVersion: '12',
        device: 'emulator-5554'
      }
    
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs'
}