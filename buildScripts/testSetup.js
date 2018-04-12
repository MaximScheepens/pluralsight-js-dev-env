// This file isn't rranspiled, so must use CommonJS and ES5.

// Register babel to tanspile before our tests run.
require('babel-register')();

// Disable webpack freatures that Mocha doesn't understand.
require.extensions['css'] = function () {};
