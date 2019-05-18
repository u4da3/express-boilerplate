const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator/check');
const handler = require('../handlers/accountHandler');
const validator = require('../validators/accountValidator');

router.get('/signup', (req, res, next) => {
  res.render('account/signup', { title: 'Express', layout: 'default' });
});

router.post('/signup', validator.signup, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.session.redirect.errors = errors.array({ onlyFirstError: true });
    return res.redirect('./signup');
    //return res.status(422).json({ errors: errors.array() });
  }
  handler.signup(req, res);
  res.redirect('./signup');
});

module.exports = router;
