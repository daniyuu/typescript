var React = require('react');
var ReactDOM = require('react-dom');

var OpenTicketsTile = React.createClass({

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
            <div className="tile-content open-ticket-tile-content">
                <div><span>{"1 Open Tickets"}</span></div>
                <div><span>{"1 Total Accounts"}</span></div>  
            </div>
        </div>
    )
  }
});

module.exports = OpenTicketsTile;