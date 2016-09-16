// dependencies //
var express = require('express');
var app = express();
var Promise = require("bluebird");
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./config/db');

app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cito minha rota de pessoas //
var api = {};
api.clients = require('./modules/person/routes');

// determino meu end point para pessoas //
app.use('/api/person', api.clients);

// levanto meu servidor na porta 3000 //
app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});