(function () {

  var React = require('react');
  
  var Glyph = React.createClass({
  
    render: function() {
      console.log('GLYPH', this.props);
      return (
        <span className={"glyphicon glyphicon-" + this.props.type} />
      );
    }
  
  });
  
  module.exports = Glyph;

} ());