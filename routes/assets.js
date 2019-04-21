var express = require('express');
var router = express.Router();
var path = require('path');

/* sanitize.css */
router.get('/style/sanitize.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/sanitize.css/sanitize.css'));
});

/* UIKit */
router.get('/uikit/uikit.min.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/js/uikit.min.js'));
});

router.get('/uikit/uikit.min.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit.min.css'));
});

router.get('/uikit/uikit-icons.min.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/js/uikit-icons.min.js'));
});

/* jQuery */
router.get('/jquery/jquery.min.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'));
});

module.exports = router;
