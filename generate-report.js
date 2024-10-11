const reporter = require('cucumber-html-reporter');
var date = new Date();
var currentDate = date.getFullYear() + '_' + (date.getMonth()+1) + '_' + date.getDate() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + date.getMilliseconds();


const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report_' + currentDate + '.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        // optional
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome 129',
        'Platform': 'Windows 10',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
    }
};

reporter.generate(options);
