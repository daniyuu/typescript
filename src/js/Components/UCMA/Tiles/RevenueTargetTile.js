var React = require('react');
var ReactDOM = require('react-dom');

var RevenueTargetTile = React.createClass({

    remove:function(e) {
        this.props.removeTile(this.props.name);
    },
    
  render: function() {
    return (
        <div className="tile">
            <button className="remove" onClick={this.remove}>X</button>
            <div className="tile-header">
                <span>{this.props.name}</span>                          
            </div>
            <div className="tile-content revenue-target-tile-content">
                <div><span>{"Jun - Jul"}</span></div>
                <div><span>{"--"}</span></div>              
            </div>
        </div>
    )
  }
});

module.exports = RevenueTargetTile;