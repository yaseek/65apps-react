(function () {

  var React = require('react');

  var Glyph = require('./glyph.jsx');
  
  var Button = React.createClass({
  
    render: function() {
      return (
        <button className={[
          "btn", 
          "btn-" + this.props.type,
          this.props.className
        ].join(' ')} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  
  });
  
  module.exports = Button;

} ());