'use strict';

var env = require('node-env-file');

var loadEnvFile = function(fileName) {

  env(fileName);
};

module.exports.loadPublicEnvFile = function () {
  try {
    loadEnvFile('.public-env');
  } catch (ex) {
    console.log('Could not load Public Env File...');
  }
};

module.exports.loadPrivateEnvFile = function () {
  try {
    loadEnvFile('.private-env');
  } catch (ex) {
    console.log('Could not load Private Env File...');
  }
};
