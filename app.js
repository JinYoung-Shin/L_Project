var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var moment = require('moment-timezone');

var app = express();

var port = process.env.PORT || 3000;
var db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function(){
      console.log("Connected to mongod server");
  });
mongoose.connect('mongodb://localhost:27017/missiondb');

var index = require('./routes/index');
var users = require('./routes/users');  // Sign Up
var login = require('./routes/login');
var main = require('./routes/main');
var card = require('./routes/card');
// var write = require('./routes/write');

// view engine setup
app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
// 임시
app.use(session({
    secret: '!@#my_goorm_ide321',
    resave: false,
    saveUninitialized: true
}));

app.use('/', index);
app.use('/login', login);
app.use('/signup', users);
app.use('/users', users);
app.use('/main', main);
app.use('/card', card);
// app.use('/write', write);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;