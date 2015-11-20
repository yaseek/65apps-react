/*
 * 65apps-react
 * https://github.com/yaseek/65apps-react
 *
 * Copyright (c) 2015 Andrew Babkin
 * Licensed under the MIT license.
 */

(function(window) {

  'use strict';

  // Local modules
  var actions = require('./actions'),
      dispatcher = require('./dispatcher'),
      personStore = require('./stores/persons');

  personStore.bind(dispatcher);

  //actions.start([]);

  if (!window.document) {
    return;
  }
  
  // Browser part
  var React = require('react'),
      ReactDOM = require('react-dom'),
      // local components
      List = require('./components/list.jsx');

  var el = window.document.getElementById('app');
  if (!!el) {
    ReactDOM.render(<List />, el);
  }

}(typeof window === 'object' ? window : {}));
