/* globals before, after, require */
const sails = require('sails');
var path = require('path');

const config = require(path.resolve(process.env.PWD,'config/env/ci.js'));

require('./integration/controllers/user.spec.js');

// Start the server
before(done => {
  sails.lift(config, err => {
    if (err) return done(err);
    done(err, sails);
  });
});

// Close the Server
after(done => sails.lower(done));
