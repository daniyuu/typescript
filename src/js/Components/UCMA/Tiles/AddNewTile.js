var React = require('react');
var ReactDOM = require('react-dom');

var AddNewTile = React.createClass({

    handleClick: function(e) {
        this.props.clickAction(e);
    },

    render: function(){
        return (
            <div className="tile add-new-tile" onClick={this.handleClick}>
                <img src="plus.jpg" />
            </div>
        )
    }
});

module.exports = AddNewTile;