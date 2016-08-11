var React = require('react');
var ReactDOM = require('react-dom');

var UCMLogo = React.createClass({
  render: function() {
    return (
        <div className="ucm-logo">
            <img src="UCMLogo.png"/>
            <span>
                {this.props.workspaceName}
            </span>
        </div>       
    )
  }
});

module.exports = UCMLogo;