// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

//setting up ejs
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//seting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//setting up routes
app.use('/', index);
app.use('/api/v1/', todos);

//starting up server
app.listen(3000, function(req, res, next){
    console.log('server is started on port 3000');
});
