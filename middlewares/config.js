const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const each = require('async/each');

module.exports = (app) => {
  let config = {};

  // search config resources
  let fileList = [];
  fs.readdirSync(path.join(__dirname, '../config'))
    .map(function(file) {
      return path.join(__dirname, '../config', file);
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
    _.merge(config, yaml.safeLoad(fs.readFileSync(file)));
    callback();
  });
  app.locals.config = config;

  return (req, res, next) => {
    next();
  };
};
