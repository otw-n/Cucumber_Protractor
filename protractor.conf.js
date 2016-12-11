exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'test/*.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'test/test.steps.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};

//exports.config = {
//    seleniumAddress: 'http://localhost:4444/wd/hub',
//    specs: ['*.spec.js'],
//    baseURL: 'http://localhost:8080/',
//    framework: 'jasmine',
//};