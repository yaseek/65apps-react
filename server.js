// System modules
var fs = require('fs');

// Third party modules
var express = require('express'),
    serveStatic = require('serve-static');
    //bodyParser = require('body-parser')

// Local modules
//var resources = require('./core/resources');

//------------------------------------------------------------------------------
// Locals
var app = express();

app.use(serveStatic(__dirname + '/static', {
    index: 'index.html'
}));
app.use(serveStatic(__dirname + '/bower_components'));
app.use(serveStatic(__dirname + '/bundle'));

//app.use(bodyParser.json());

//resources(app);

app.listen(8080);