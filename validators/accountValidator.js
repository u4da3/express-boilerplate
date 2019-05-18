const { check, oneOf } = require('express-validator/check');
module.exports.signup = [
  check('username')
    .not()
    .isEmpty()
    .withMessage('Username is required')
    .isAscii()
    .withMessage('Enter username as ascii chars'),
];
