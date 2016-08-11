var React = require('react');
var ReactDOM = require('react-dom');

var TopBottomContainer = React.createClass({

    render: function() {
        var topContent = null;
        var bottomContent = null;
        
        React.Children.map(this.props.children, function (child, index) {
            if (child.props.contentPosition === "top") {
                topContent = child;
            }
            
            if (child.props.contentPosition === "bottom") {
                bottomContent = child;
            }            
        });
        
        return (
            <div className={this.props.BlockClassName}>
                {topContent}
                {bottomContent}
            </div>            
        )        
    }
});

module.exports = TopBottomContainer;