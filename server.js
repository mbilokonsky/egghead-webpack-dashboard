var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var Dashboard = require("webpack-dashboard");
var DashboardPlugin = require("webpack-dashboard/plugin");

var app = express();
var compiler = webpack(config);

var dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

app.use(express.static('public'));
app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true
}));

app.listen(8080, "127.0.0.1", function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:8080');
});
