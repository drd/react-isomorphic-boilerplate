// requiring .js files will be processed with babel
require('babel/register')({optional: ["es7.asyncFunctions"]});

var babel = require('babel');

// configure node-jsx to post-process .jsx files with babel
require('node-jsx').install({
    extension: '.jsx',
    postTransform: function(f, o) {
        return babel.transform(f, {stage: 1}).code;
    }
});


var chalk = require('chalk');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = require('./app');
var api = require('./api');


start();


function start() {
    var server = express();
    server.use(bodyParser.json());
    server.use(cors());
    server.use('/api', api);
    server.use(app);
    server.listen(process.env['LISTEN_PORT'] || 3001, function(err, result) {
        if (err) return console.log(err);
        console.log(chalk.green("Listening on port 3001"));
    });
}
