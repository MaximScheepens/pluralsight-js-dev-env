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

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 1, "firstName":"Tammy", "lastName":"Norton", "email":"tammy@yahoo.com"},
    {"id": 1, "firstName":"Tina", "lastName":"Lee", "email":"tina@hotmail.com"}
  ])
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

console.log(chalk.green("Press ctrl+c to stop the server..."));
