/* global module, require */

const User = require('./Controllers/User.controller');

module.exports = [
  [ '/user', 'GET', User.get ],
  [ '/user/:userId', 'GET', User.get ]
];
