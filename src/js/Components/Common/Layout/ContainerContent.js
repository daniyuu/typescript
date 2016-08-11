var React = require('react');
var ReactDOM = require('react-dom');

var ContainerContent = React.createClass({

    render: function() {
        return (
            <div className={this.props.BlockClassName}>
                {this.props.children}
            </div>
        )        
    }
});

module.exports = ContainerContent;