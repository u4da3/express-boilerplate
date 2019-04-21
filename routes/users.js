const express = require('express');
const router = express.Router();

const { auth, requiresAuth } = require('express-openid-connect');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
