var React = require('react');
var ReactDOM = require('react-dom');

var AvgDailySpendTile = React.createClass({

    remove:function(e) {
        this.props.removeTile(this.props.name);
    },
    
  render: function(){
    return (
        <div className="tile">
            <button className="remove" onClick={this.remove}>X</button>
            <div className="tile-header avg-daily-spend-tile-header">
                <span>{this.props.name}</span>                          
            </div>   
            <div className="tile-content avg-daily-spend-tile-content">
                <div className="avg-daily-spend-tile-content-facts">
                    <span className="value1">1,612,984.89</span>
                    <br />
                    <span className="value2">1,667,530.20</span>
                </div>
                <hr />
                <div className="avg-daily-spend-tile-content-diff">
                    <span>-54,545.31</span> | <span>-3.27%</span>
                </div>                                
            </div>                       
        </div>
    )
  }
});

module.exports = AvgDailySpendTile;