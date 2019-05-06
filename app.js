var createError = require('http-errors');
var express = require('express');
var exphbs  = require('express-handlebars');
var helpers = require('handlebars-helpers');
var layouts = require('handlebars-layouts');
var session = require('express-session');
var helmet = require('helmet');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var stylus = require('stylus');
var sassMiddleware = require('node-sass-middleware')
var { auth, requiresAuth } = require('express-openid-connect');
/* Middlewares */
var i18nMiddleware = require('./middlewares/i18n')
var configMiddleware = require('./middlewares/config')
var layoutMiddleware = require('./middlewares/layout')
/* Routers */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var assetsRouter = require('./routes/assets');

var app = express();
app.use(helmet());

// use session controll
app.use(session({
  name : 'EHBSID',
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}));

// view engine setup
var hbs = exphbs.create({
  defaultLayout: 'default',
  extname: ".hbs",
});
helpers.i18n({handlebars: hbs.handlebars})
helpers.comparison({handlebars: hbs.handlebars})
layouts.register(hbs.handlebars);

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//hbs = app.set('view engine')
//console.log(hbs)

//body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/assets', assetsRouter);

//middlewares
app.use(configMiddleware(app))
app.use(i18nMiddleware(app))
app.use(layoutMiddleware())
//app.use(auth());

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/users', requiresAuth());


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
