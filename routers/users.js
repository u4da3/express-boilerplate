const express = require('express');
const router = express.Router();
const debug = require('debug')('ehb');

const usersHandler = require('../handlers/usersHandler');


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET users list. */
router.get('/list', (req, res, next) => {
  usersHandler
    .show(req, res)
    .then((data) => {
      debug(JSON.stringify(data));
      res.render('users/list', { title: 'Express', layout: 'layout', data: data });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
