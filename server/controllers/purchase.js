/* jshint latedef:false */
'use strict';

/**
 * Publicly accessible API endpoints.
 */

/* global emit, tojson, print */

var route = require('koa-route'),
    db = require('../config/db');

// register koa routes
exports.init = function (app) {
  app.use(route.get('/api/products/attributes', getProductAttrs));
};

function *getProductAttrs() {
  var map = function(){
    //print('map emitting on ' + tojson(this));

    // its the top level
    if(!this.group) {
      //emit({'topLevel': this.name}, {children: []});
      return;
    }
    this._id=undefined;
    // set up groups 
    emit({'groupName': this.group}, {children: [this.name]});

    // add dependents to parents 
    if(!this.parents) {
      return;
    }
    for(var i = 0; i < this.parents.length; i+=1) {
      emit(this.parents[i], {children: [this.name]});
    }
  };

  var reduce = function(key, values) {
    //print('reduce called on key ' + tojson(key) + ' with values ' + tojson(values));
    var reduced = {children:[]};
    for (var i = 0; i < values.length; i+=1) {
      var inter = values[i];
      for (var j = 0; j < inter.children.length; j+=1) {
        reduced.children.push(inter.children[j]);
      }
    }
    return reduced;
  };

  var finalize = function(key, value) {
    return value.children;
  };


  var options = {
    //out: 'attributesTree',
    out: 'attributesTree',
    finalize: finalize
  };

  var collection = yield db.attributes.mapReduce(map, reduce, options);
  var res = yield collection.find().toArray();
  var firstLevel = {};
  var secondLevel = [];
  for (var i = 0; i < res.length; i+=1) {
    if (res[i]._id.groupName)
      firstLevel[res[i]._id.groupName] = {children : res[i].value};
    else
      secondLevel.push(res[i]);

  }
  this.body = {firstLevel: firstLevel, secondLevel: secondLevel};
}





