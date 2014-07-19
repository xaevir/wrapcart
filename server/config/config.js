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
      port: 8002
    },
    rethinkdb: {
      host: 'localhost',
      port: '28015',
      db: 'wrapit'
    },
  },

  test: {
    app: {
      port: 9001
    },
    mongo: {
      url: 'mongodb://localhost:27017/wrapit-test'
    }
  },

  production: {
    app: {
      port: process.env.PORT || 8002,
      cacheTime: 0   // 7 * 24 * 60 * 60 * 1000 /* default caching time (7 days) for static files, calculated in milliseconds */
    },
    mongo: {
      url: 'mongodb://localhost:27017/wrapit'
    },
  }
};

// override the base configuration with the platform specific values
module.exports = _.merge(baseConfig, platformConfig[baseConfig.app.env || (baseConfig.app.env = 'development')]);

// *note to me what are you merging?
