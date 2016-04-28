var express       = require('express');
var app           = express();

var sofiene = 'salut';

app.get('/test', function(req, res) {
    res.send('test');
});

app.listen('3000');

var vorlonWrapper = require("vorlon-node-wrapper");
vorlonWrapper.start('http://localhost:1337', 'default', true);