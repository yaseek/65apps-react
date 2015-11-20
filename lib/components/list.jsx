(function () {

  // System modules
  var React = require('react');

  // Local modules
  var personStore = require('../stores/persons'),
      actions = require('../actions');

  // Local components
  var Person = require('./person.jsx'),
      Glyph = require('./glyph.jsx'),
      Button = require('./button.jsx');

  var List = React.createClass({

    componentDidMount: function () {
      personStore.on( 'change', this.listChanged );
    },

    componentWillUnmount: function() {  
      personStore.removeListener( 'change', this.listChanged );
    },

    listChanged: function () {
      console.log('LIST CHANGED');
      this.forceUpdate();
    },

    addPerson: function () {
      actions.addPerson(personStore.itemTemplate);
    },
  
    render: function() {
      var items = personStore.get();
      console.log('ITEMS', items);
      return (
        <div>
          <div>
            <Button type="primary" 
              glyph="plus" text="Добавить" onClick={this.addPerson} />
          </div>
          <div>
            {items.map(function(item, i) {
              return <Person key={i} {...item}/>;
            })}
          </div>
        </div>
      );
    }
  
  });
  
  module.exports = List;

} ());