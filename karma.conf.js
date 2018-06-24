var webpackConfig = require('./webpack.config');
delete webpackConfig.entry;

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.spec.js',
        ],
        exclude: [],
        preprocessors: {
            'test/**/*.spec.js': ['webpack']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        }
    })
};