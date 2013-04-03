/*global require: false */
require.config({
  // init app, require will look for an app.js in the same folder as this config
  deps : ['app'],

  // define paths
  paths : {
    test : '..',
    spec : '/test/spec',
    vendor : './vendor',
    jquery : '/vendor/jquery'
  }
});
