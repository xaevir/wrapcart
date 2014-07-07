'use strict';

/**
 * MongoDB configuration using generators (with the help of co-mongo package).
 * You can require this config file in your controllers and start using named collections directly.
 * See /controllers directory for sample usage.
 */

var comongo = require('co-mongo'),
    connect = comongo.connect,
    config = require('./config');

// extending and exposing top co-mongo namespace like this is not optimal but it saves the user from one extra require();
module.exports = comongo;

/**
 * Opens a new connection to the mongo database, closing the existing one if exists.
 */
comongo.connect = function *() {
  if (comongo.db) {
    yield comongo.db.close();
  }

  // export mongo db instance
  var db = comongo.db = yield connect(config.mongo.url);

  // export default collections
  comongo.counters = yield db.collection('product');
};

