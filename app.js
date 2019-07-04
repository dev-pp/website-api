var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/google-photos');

var app = express();

// authorize CORS
app.use(function (req, res, next) {
 const origin = req.headers.origin;
 if (origin) {
  res.setHeader('Access-Control-Allow-Origin', origin);
 }
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/photos', usersRouter);

module.exports = app;
