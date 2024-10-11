
// web project with playwright + cucumber or full BDD applied! + JS
Written with BDD/Cucumber here it lost using capability of playwright..

The code is rather example to a website, to not bother the web so url just not defined here.
but code can be learned like for its structure.

Setup: 
1. install playwright 
$ npm init playwright@latest

2. Install cucumber 
$ npm install@cucumber/cucumber

and Cucumber plugin as needed in VSCode from Extensions.

3. Replace the url in page.goto('https://tba.com') with target url first , and the assertion 'tba' as title of homepage in expect(this.page).toHaveTitle('tba'), in ./pages/homepage.page.js.

How to run test:
1. How to execute the test at specific tag of test case, with using Built-in Report
$ npx cucumber-js --tags "@regression" --format html:reports/cucumber_report.html

OR

run for the feature file name
$ npx cucumber-js features/cart.feature --format html:reports/cucumber_report.html

2. In case using Cucumber HTML Reporter:

2.1 Follow this https://www.npmjs.com/package/cucumber-html-reporter 

OR

2.2 Follow but again here
2.2.1 Install 
$ npm install cucumber-html-reporter --save-dev
2.2.2 Create a file named 'generate-report.js' here in repo with the example of bootstrap. // or any file name .js
2.2.3 run test with json report format
$ npx cucumber-js --tags "@regression" --format json:reports/cucumber_report.json
2.2.4 run file name in 2.2.2
$ node generate-report.js 
