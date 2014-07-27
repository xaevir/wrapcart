'use strict';

/**
 * Environment variables and application configuration.
 */

var path = require('path'),
    _ = require('lodash');

var baseConfig = {
  app: {
    root: path.normalize(__dirname + '/../..'),
    env: process.env.NODE_ENV,
    secret: 'secret key' /* used in signing the jwt tokens */
  }
};

var platformConfig = {
  development: {
    app: {
      port: 8005
    },
    rethinkdb: {
      host: 'localhost',
      port: '28015',
      db: 'wrapit'
    },
  },

  test: {
    app: {
      port: 8006
    },
    rethinkdb: {
      host: 'localhost',
      port: '28015',
      db: 'wrapit'
    },
  },

  production: {
    app: {
      port: process.env.PORT || 8007,
      cacheTime: 0   // 7 * 24 * 60 * 60 * 1000 /* default caching time (7 days) for static files, calculated in milliseconds */
    },
    rethinkdb: {
      host: 'localhost',
      port: '28015',
      db: 'wrapit'
    },
  }
};

// override the base configuration with the platform specific values
module.exports = _.merge(baseConfig, platformConfig[baseConfig.app.env || (baseConfig.app.env = 'development')]);

// *note to me what are you merging?
