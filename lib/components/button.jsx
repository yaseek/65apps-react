(function () {

  var React = require('react');

  var Glyph = require('./glyph.jsx');
  
  var Button = React.createClass({
  
    render: function() {
      console.log('BUTTON', this.props);
      return (
        <button className={"btn btn-" + this.props.type} >
          {(this.props.glyph) ? <Glyph type={this.props.glyph}/> : ''}
          {this.props.text}
        </button>
      );
    }
  
  });
  
  module.exports = Button;

} ());