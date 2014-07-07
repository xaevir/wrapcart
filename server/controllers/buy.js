/* jshint latedef:false */
'use strict';

/**
 * Publicly accessible API endpoints.
 */

///* global emit, tojson, print */

var route = require('koa-route'),
    config = require('../config/config'),
    r = require('rethinkdbdash')(config.rethinkdb),
    _ = require('lodash');


// register koa routes
exports.init = function (app) {
  app.use(route.get('/api/product/attributes/size', getProductAttrSize));
  app.use(route.get('/api/product/attributes/dependents', getProductAttrDependents));
};


function *getProductAttrSize() {
  var cursor = yield r.table('attributes').filter(r.row('group_id').eq('896000c3-c86b-42ca-b659-751a13ab375d'))
    .eqJoin('group_id', r.db('wrapit').table('attributeGroups'))
    .map(r.row.merge(function(doc) {
      return {
        right: {
          group_name: doc('right')('name')
        }
      };
    }))
    .without({'right': {'id': true, 'name': true}})
    .zip()
    .run();

    this.body = yield cursor.toArray();
}

function *getProductAttrDependents() {


  var cursor = yield r.db('wrapit').table('attribute_dependents')
    .eqJoin('parent_id', r.db('wrapit').table('attributes'))
    .map({
        'parent_name': r.row('right')('name'),
        'parent_id': r.row('right')('id'),
        'child_id': r.row('left')('child_id')
    })
    .eqJoin('child_id', r.db('wrapit').table('attributes'))
    .map(r.row.merge(function(doc) {
      var groupName = r.db('wrapit').table('attributeGroups').get(doc('right')('group_id'))('name');
      return {
        right: {
          group_name: groupName,
          parent_name: doc('left')('parent_name')
        }
      };
    }))
    .zip()
    .pluck('name', 'hex', 'parent_name', 'group_name')
    .group('parent_name', 'group_name')
    .ungroup()
    .map(function(row){
      var val = row('group').nth(0).add(r.expr('.')).add(row('group').nth(1));
      return row.merge({group: val });
    })
    .run();

  var result = yield cursor.toArray();

  var obj = {};
  result.forEach(function(row){
    obj[row.group] = row.reduction;
  });

  
//  var group = _.groupBy(result, 'parent_name');
//  var hi = _.groupBy(group[0], 'group_name');
//  var group1 = _.forEach(group, function(row){
//    row = _.groupBy(row, 'group_name');
//  })


  this.body = obj;

//  var res = {};
//  var grouped = _.(result, function(row){
//    var value = {};
//    value[row.group[1]] = row.reduction;
//    res[row.group[0]] = value;
//  });
//  this.body = res
}





