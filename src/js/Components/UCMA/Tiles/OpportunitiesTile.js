var React = require('react');
var ReactDOM = require('react-dom');

var OpportunitiesTile = React.createClass({

    remove:function(e) {
        this.props.removeTile(this.props.name);
    },
    
  render: function() {
      var table_style = {
            marginTop: "20px",
            textAlign: "right",
            borderCollapse: "collapse"          
      };
      
      var td_1_style = {
          fontSize:"16px",
          width: "60px"
      };
      
      var td_2_style = {
          fontSize:"16px",
          width: "60px",
          borderRight: "1px solid black",
          paddingRight: "10px"
      };
      
      var td_3_style = {
          fontSize:"16px",
          width: "60px",
          borderRight: "1px solid black",
          paddingRight: "10px"
      };
      
      var td_4_style = {
          fontSize:"16px",
          width: "110px"
      };                  
      
      
    return (
        <div className="tile">
            <button className="remove" onClick={this.remove}>X</button>
            <div className="tile-header">
                <span>{this.props.name}</span>                          
            </div>
            <div className="tile-content"> 
                <table style={table_style}>
                    <tr>
                        <td style={td_1_style} >{""}</td>
                        <td style={td_2_style}>{"Count"}</td>
                        <td style={td_3_style}>{"Score"}</td>
                        <td style={td_4_style}>{"Est. Spend USD"}</td>
                    </tr>
                    <tr>
                        <td style={td_1_style} >{"OPEN"}</td>
                        <td style={td_2_style}>{"1,148"}</td>
                        <td style={td_3_style}>{"20,498"}</td>
                        <td style={td_4_style}>{"530,623"}</td>
                    </tr>
                    <tr>
                        <td style={td_1_style} >{"Pitched"}</td>
                        <td style={td_2_style}>{"1,148"}</td>
                        <td style={td_3_style}>{"20,498"}</td>
                        <td style={td_4_style}>{"530,623"}</td>
                    </tr>                                                           
                </table>             
            </div>
        </div>
    )
  }
});

module.exports = OpportunitiesTile;