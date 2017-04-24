module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "www/js",
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],
    // list of files / patterns to load in the browser
    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-route.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-sanitize.min.js',
      "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.3/angular-mocks.js",
      "**/*.js"
    ],
    // list of files to exclude
    exclude: [
      ""
    ],
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
