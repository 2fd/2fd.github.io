'use strict';

var path = require('path');
require('node-env-file')(path.resolve('.env'));

var log = require('debug')('server');
var express = require('express');
var server = express();

server.use( express.static(path.resolve()) );

server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'), function() {
  log('listening on port ' + server.get('port'));
});

module.exports = server;
