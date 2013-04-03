/*global jasmine: false */
define(['spec/example'], function () {
  jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
  jasmine.getEnv().execute();
});
