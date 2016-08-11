var React = require('react');
var ReactDOM = require('react-dom');

var TotalAlertsTile = React.createClass({

    remove:function(e) {
        this.props.removeTile(this.props.name);
    },
    
  render: function() {
      var table_style = {
            borderCollapse: "collapse",
            marginTop: "20px"        
      };
      
      var td_1_style = {
          fontSize:"16px",
          width: "250px",
          height:"20px"
      };
      
      var td_2_style = {
          fontSize:"16px",
          width: "40px",
          height:"20px"          
      };
            
    return (
        <div className="tile total-alerts-tile">
            <button className="remove" onClick={this.remove}>X</button>
            <div className="tile-header total-alerts-tile-header">
                <span>{this.props.name}</span>
                <span className="count">11</span>                          
            </div>
            <hr />
            <div className="tile-content">
                <table style={table_style}>
                    <tr>
                        <td style={td_1_style} >{"Severe - Accounts have gone dark"}</td>
                        <td style={td_2_style} >2</td>
                    </tr>
                    <tr>
                        <td style={td_1_style} >{"Warning - Action required"}</td>
                        <td style={td_2_style} >2</td>
                    </tr>
                    <tr>
                        <td style={td_1_style} >{"Attention - Review needed"}</td>
                        <td style={td_2_style} >7</td>
                    </tr>                                                           
                </table>                   
            </div>
        </div>
    )
  }
});

module.exports = TotalAlertsTile;