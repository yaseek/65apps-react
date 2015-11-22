/*
 * 65apps-react
 * https://github.com/yaseek/65apps-react
 *
 * Copyright (c) 2015 Andrew Babkin
 * Licensed under the MIT license.
 */

(function() {

  'use strict';

  var dispatcher = require('./dispatcher');

  module.exports = {

    start: function () {
      dispatcher.dispatch({
          action: 'start'
      });
    },

    addPerson: function (item) {
      dispatcher.dispatch({
          action: 'person.add',
          item: item
      });
    },

    call: function (action, data, callback) {
      dispatcher.dispatch({
          action: action,
          data: data,
          callback: callback
      });
    }

  };

}());
