// ES5:
/*
var express = require('express');
var path    = require('path');
var open    = require('open');
var chalk   = require('chalk');

var port    = 3000;
var app     = express();
*/

// ES6: => babel-node ...
import express from 'express';
import path    from 'path';
import open    from 'open';
import chalk   from 'chalk';
import webpack from 'webpack';
import config  from '../webpack.config.dev';

/* eslint-disable no-console */

const port      = 3000;
const app       = express();
const compiler  = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo     : true,
  publicPath : config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

console.log(chalk.green("Press ctrl+c to stop the server..."));
