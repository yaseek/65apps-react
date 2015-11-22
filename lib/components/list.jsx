(function () {

  // System modules
  var React = require('react');

  // Local modules
  var personStore = require('../stores/persons'),
      actions = require('../api/actions');

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
      var items = personStore.get();
      this.forceUpdate();
    },

    addPerson: function () {
      actions.addPerson();
    },

    render: function() {
      var self = this;
      var items = personStore.get();

      var persons = items.map(function(item, i) {
        item.id = i;
        return <Person key={i} {...item} />;
      });

      return (
        <div>
          <h4>
            <span className="col-sm-2">Список: </span>
            <Button type="btn btn-default btn-xs" 
              onClick={this.addPerson}>
              <Glyph type="plus" />&nbsp;
              Добавить персону
            </Button>
          </h4>
          <ul>
            {persons}
          </ul>
        </div>
      );
    }
  
  });
  
  module.exports = List;

} ());