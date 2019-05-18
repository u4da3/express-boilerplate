const express = require('express');
const router = express.Router();
const path = require('path');

/* sanitize.css */
router.get('/style/sanitize.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/sanitize.css/sanitize.css'));
});

/* UIKit */
router.get('/uikit/js/uikit.min.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/js/uikit.min.js'));
});

router.get('/uikit/js/uikit-icons.min.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/js/uikit-icons.min.js'));
});

router.get('/uikit/css/uikit.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit.css'));
});

router.get('/uikit/css/uikit.min.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit.min.css'));
});

// router.get('/uikit/css/uikit-core.css', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit-core.css'));
// });
//
// router.get('/uikit/css/uikit-core.min.css', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit-core.min.css'));
// });
//
// router.get('/uikit/css/uikit-rtl.css', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit-rtl.css'));
// });
//
// router.get('/uikit/css/uikit-rtl.min.css', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit-rtl.min.css'));
// });
//
// router.get('/uikit/css/uikit-core-rtl.css', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit-core-rtl.css'));
// });
//
// router.get('/uikit/css/uikit-core-rtl.min.css', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/uikit/dist/css/uikit-core-rtl.min.css'));
// });

/* jQuery */
// router.get('/jquery/core.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/core.js'));
// });

router.get('/jquery/jquery.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.js'));
});

router.get('/jquery/jquery.min.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'));
});

router.get('/jquery/jquery.min.js.map', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js.map'));
});

// router.get('/jquery/jquery.slim.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.slim.js'));
// });
//
// router.get('/jquery/jquery.slim.min.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.slim.min.js'));
// });
//
// router.get('/jquery/jquery.slim.min.js.map', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/jquery/dist/jquery.slim.min.js.map'));
// });

/* Material Design Icons */
router.get('/mdi/css/materialdesignicons.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/css/materialdesignicons.css'));
});

router.get('/mdi/css/materialdesignicons.css.map', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/css/materialdesignicons.css.map'));
});

router.get('/mdi/css/materialdesignicons.min.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/css/materialdesignicons.min.css'));
});

router.get('/mdi/css/materialdesignicons.min.css.map', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/css/materialdesignicons.min.css.map'));
});

router.get('/mdi/fonts/materialdesignicons-webfont.eot', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot'));
});

router.get('/mdi/fonts/materialdesignicons-webfont.svg', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/fonts/materialdesignicons-webfont.svg'));
});

router.get('/mdi/fonts/materialdesignicons-webfont.ttf', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/fonts/materialdesignicons-webfont.ttf'));
});

router.get('/mdi/fonts/materialdesignicons-webfont.woff', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff'));
});

router.get('/mdi/fonts/materialdesignicons-webfont.woff2', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2'));
});

/* lodash */
// router.get('/mdi/lodash/lodash.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/lodash/lodash.js'));
// });
//
// router.get('/mdi/lodash/lodash.min.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../node_modules/lodash/lodash.min.js'));
// });

module.exports = router;
