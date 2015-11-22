(function () {

  var React = require('react');

  var List = require('./list.jsx'),
      Button = require('./button.jsx');
  
  var AppView = React.createClass({
  
    render: function() {
      return (
        <div>
          <h2>
            Управление персоналом
          </h2>
          <List />
        </div>
      );
    }
  
  });
  
  module.exports = AppView;

} ());