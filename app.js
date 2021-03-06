var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var viewController = require('./routes/view');
var bluePrintController = require('./routes/blueprints');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'getalifemate(read_mist)', cookie: { maxAge: 60000 }}))

app.use((req, res, next) => {
  req.session.team = 'xcpt';

  next();
})

app.use('/', indexRouter);

app.get('/login', viewController.login);
app.get('/signup', viewController.signup);

app.get('/admin', viewController.admin.index);
app.get('/admin/available', viewController.admin.getAvailableStuff);
app.get('/admin/environments/new', viewController.admin.newEnvironment);
app.get('/admin/environments/view', viewController.admin.viewEnvironment);

app.get('/member', viewController.member.index);
app.get('/member/environments/view', viewController.member.viewEnvironment);

app.get('/team', viewController.team);

app.get('/blueprints', bluePrintController.getAll);
app.post('/blueprints/provision', bluePrintController.provision);
app.post('/blueprints', bluePrintController.insert);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
