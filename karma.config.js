module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [
      require('karma-typescript'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher')
    ],
    files: [
      {pattern: 'src/**/*.ts'}
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    reporters: ['mocha', 'karma-typescript'],
    browsers: ['Chrome'],
    mochaReporter: {
      showDiff: true
    }
  });
};
