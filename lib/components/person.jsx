(function () {

  var React = require('react');
  
  var Person = React.createClass({
  
    render: function() {
      console.log('PERSON', this.props);
      return (
        <div>
          personal data: {this.props.fio} {this.props.email} {this.props.phone}
        </div>
      );
    }
  
  });
  
  module.exports = Person;

} ());