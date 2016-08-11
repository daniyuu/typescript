var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');

var SettingBar = React.createClass({
    getInitialState: function() {
        return {
            bigBarDisplay: "none",
            smallBarOneDisplay: "block",
            smallBarTwoDisplay: "none"
        };
    },
    
    showSmallBarTwo: function (e) {
        console.log("showSmallBarTwo");
        this.setState({
            bigBarDisplay: "none",
            smallBarOneDisplay: "none",
            smallBarTwoDisplay: "block"       
        });
    },
    
    hideSmallBarTwo: function (e) {
        console.log("hideSmallBarTwo");
        
        if(this.state.smallBarTwoDisplay !== "none") {
            this.setState({
                bigBarDisplay: "none",
                smallBarOneDisplay: "block",
                smallBarTwoDisplay: "none"       
            });             
        } 
    },

    showBigBar: function (e) {
        console.log("showBigBar");
        this.setState({
            bigBarDisplay: "block",
            smallBarOneDisplay: "none",
            smallBarTwoDisplay: "none"       
        });
    },
    
    hideBigBar: function (e) {
        console.log("hideBigBar");
        this.setState({
            bigBarDisplay: "none",
            smallBarOneDisplay: "block",
            smallBarTwoDisplay: "none"       
        });     
    },
      
  render: function() {
    return (
        <div className="setting-bar">
            <div className="setting-bar-big" style={{display: this.state.bigBarDisplay}} onMouseLeave={this.hideBigBar}>
               {this.props.children}
            </div>
            <div className="setting-bar-small-1" style={{display: this.state.smallBarOneDisplay}} onMouseEnter={this.showSmallBarTwo}>
                <img src="global_setting.jpg" />
            </div>
            <div className="setting-bar-small-2" style={{display: this.state.smallBarTwoDisplay}} onClick={this.showBigBar} onMouseLeave={this.hideSmallBarTwo}>
                <span>Change Global Settings</span>
            </div>            
        </div>
    )
  }
});

module.exports = SettingBar;
