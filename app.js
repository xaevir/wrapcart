'use strict';

/**
 * Entry point for KOAN app. Initiates database connection and starts listening for requests on configured port.
 */

var config = require('./server/config/config')
  , db = require('./server/config/db')
  , koaConfig = require('./server/config/koa')
  , co = require('co')
  , koa = require('koa')
  , app = koa();

module.exports = app;

co(function *() {
  // initialize mongodb
  yield db.connect();

  // koa config
  koaConfig(app);

  // create http and websocket servers and start listening for requests
  app.server = app.listen(config.app.port);
  if (config.app.env !== 'test') {
    console.log('Wrapit listening on port ' + config.app.port);
  }
})();

