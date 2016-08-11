var React = require('react');
var ReactDOM = require('react-dom');

var LeftRightContainer = React.createClass({

    render: function() {
        var leftContent = null;
        var rightContent = null;
        
        React.Children.map(this.props.children, function (child, index) {
            if (child.props.contentPosition === "left") {
                leftContent = child;
            }
            
            if (child.props.contentPosition === "right") {
                rightContent = child;
            }            
        });
        
        return (
            <div className={this.props.BlockClassName}>
                {leftContent}
                {rightContent}
            </div> 
        )        
    }
});

module.exports = LeftRightContainer;