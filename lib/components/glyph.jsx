(function () {

  var React = require('react');
  
  var Glyph = React.createClass({
  
    render: function() {
      return (
        <span className={[
          "glyphicon", 
          "glyphicon-" + this.props.type,
          this.props.className
          ].join(' ')} />
      );
    }
  
  });
  
  module.exports = Glyph;

} ());