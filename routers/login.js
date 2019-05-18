const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Express', layout: 'default' });
});

router.post('/login', (req, res, next) => {
  const passport = req.app.passport;
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: false,
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/auth/:provider', (req, res, next) => {
  const provider = req.params.provider;
  const passport = req.app.passport;
  passport.authenticate(provider);
});

router.get('/auth/:provider/callback', (req, res, next) => {
  const provider = req.params.provider;
  const passport = req.app.passport;
  passport.authenticate(provider, {
    successRedirect: '/',
    failureRedirect: '/login',
  })(req, res, next);
});

module.exports = router;
