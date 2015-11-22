/*
 * 65apps-react
 * https://github.com/yaseek/65apps-react
 *
 * Copyright (c) 2015 Andrew Babkin
 * Licensed under the MIT license.
 */

(function () {

  //System modules
  var EventEmitter = require('events'),
      util = require('util');

  function PersonStore () {
    EventEmitter.call(this);

    var self = this;

    var persons = [];

    this.get = function () {
      return persons;
    };

    this.set = function (id, item) {
      persons[id] = item;
      self.emit('change');
    }

    this.push = function (item) {
      //console.log('PUSH', item);
      persons.push(item);
      self.emit('change');
      return self;
    };

  }
  util.inherits(PersonStore, EventEmitter);

  function handler (payload) {
    switch (payload.action) {

      case 'person.save': 
        store.set(payload.data.id, payload.data.state);
        if (payload.callback) {
          payload.callback();
        }
        break;
      
      case 'person.add': 
        store.push({});
        break;

      default:
        console.log('persons handler', payload, store._tag);
        break;
    }
  }

  PersonStore.prototype.bind = function (dispatcher) {
    store._tag = dispatcher.register(handler);
  }

  var store = new PersonStore();

  module.exports = store;

} ());