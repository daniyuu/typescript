var React = require('react');
var ReactDOM = require('react-dom');

var DateSetting = React.createClass({
    getInitialState: function() {
        return {
            currentDateOption: "Last 30 Days",
            timeRange: "(6/11/2016 - 7/10/2016)",
            comparedTo: "Previous Period",
            changeDivDisplay: "none"
        };
    },
        
    handleClick: function (e) {
        
    },
    
    clickChangeDiv: function (e) {
      this.setState({
          changeDivDisplay: "none"
      });  
    },
    
    showChangeDiv: function (e) {
      this.setState({
          changeDivDisplay: "block"
      });        
    },
    
    render: function() {
        return (
            <div className="date-setting">
                <div className="date-setting-info" onClick={this.showChangeDiv}>
                    <span>{this.state.currentDateOption} {this.state.timeRange}</span>
                    <br/>
                    <span>Compared to: {this.state.comparedTo}</span>
                </div>
                <div className="date-setting-change" style={{display: this.state.changeDivDisplay}} onClick={this.clickChangeDiv} >
                    <img src="DateSetting.png" />
                </div>             
            </div>
        )        
    }
});

module.exports = DateSetting;