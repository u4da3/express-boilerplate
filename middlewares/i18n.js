const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const each = require('async/each');

module.exports = (app) => {
  let i18n = {};

  // search i18n resources
  let fileList = [];
  fs.readdirSync(path.join(__dirname, '../i18n'))
    .map(function(file) {
      return path.join(__dirname, '../i18n', file);
    })
    .filter(function(file) {
      if (!fs.statSync(file).isFile()) {
        // ignore except for files
        return false;
      } else {
        // accept only json or yaml
        const regex = /.*\.(json|yaml|yml)$/;
        return regex.test(file);
      }
    })
    .forEach(function(file) {
      fileList.push(file);
    });
  console.log(fileList);

  each(fileList, function(file, callback) {
    let key = path.basename(file).split('.')[0];
    let val = yaml.safeLoad(fs.readFileSync(file));
    if (key && val) i18n[key] = val;
    callback();
  });
  _.merge(app.locals, i18n);

  return (req, res, next) => {
    console.log(req.headers['accept-language']);
    app.locals.language = 'ja_JP';
    next();
  };
};
