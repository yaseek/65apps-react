(function () {

  var EventEmitter = require('events'),
      util = require('util');

  function PersonStore () {
    EventEmitter.call(this);

    var self = this;

    var persons = [];

    this.get = function () {
      return persons;
    };

    this.push = function (item) {
      persons.push(item);
      self.emit('change');
      return self;
    };

    this.itemTemplate = {
        fio: 'some_fio',
        email: 'e@mail.com',
        phone: '12345'
    };
  }
  util.inherits(PersonStore, EventEmitter);

  function handler (payload) {
    switch (payload.action) {

      case 'start': 
        store.push(store.itemTemplate);
        break;
      
      case 'add-person': 
        store.push(payload.item || store.itemTemplate);
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