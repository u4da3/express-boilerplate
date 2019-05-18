const createError = require('http-errors');
const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('handlebars-helpers');
const layouts = require('handlebars-layouts');
const session = require('express-session');
const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const stylus = require('stylus');
const sassMiddleware = require('node-sass-middleware');
const { auth, requiresAuth } = require('express-openid-connect');
/* Middlewares */
const i18nMiddleware = require('./middlewares/i18n');
const configMiddleware = require('./middlewares/config');
const layoutMiddleware = require('./middlewares/layout');
const redirectMiddleware = require('./middlewares/redirect');
const database = require('./middlewares/database');
/* Routers */
const indexRouter = require('./routers/index');
const loginRouter = require('./routers/login');
const accountRouter = require('./routers/account');
const usersRouter = require('./routers/users');
const assetsRouter = require('./routers/assets');
const authSetup = require('./middlewares/auth');

const app = express();
app.use(helmet());

// use session controll
app.use(
  session({
    name: 'EHB_SESSION_ID',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 60 * 1000,
    },
  })
);
app.use(redirectMiddleware());

// view engine setup
const hbs = exphbs.create({
  defaultLayout: 'default',
  extname: '.hbs',
});
helpers.i18n({ handlebars: hbs.handlebars });
helpers.array({ handlebars: hbs.handlebars });
helpers.comparison({ handlebars: hbs.handlebars });
layouts.register(hbs.handlebars);

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//hbs = app.set('view engine')
//console.log(hbs)

database(app);

//body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(stylus.middleware(path.join(__dirname, 'public')));

authSetup(app);

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/assets', assetsRouter);

//middlewares
app.use(configMiddleware(app));
app.use(i18nMiddleware(app));
app.use(layoutMiddleware());
//app.use(auth());

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/account', accountRouter);
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
