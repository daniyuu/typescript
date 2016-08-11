var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');
var Link = require('react-router').Link;

var UserRoleInfo = React.createClass({
   render: function() {
       return (
           <div className="user-setting-roles">
                {this.props.userRole}     
           </div>
       )
   } 
});

var SettingItem = React.createClass({
    
  getInitialState: function () {
    return {
        isHighlight: false
    }
  },
  
  handleMouseEnter: function (e) {
    this.setState({isHighlight: true});  
  },
  
  handleMouseLeave: function (e) {
    this.setState({isHighlight: false});        
  },
    
   render: function() {
       var itemClassName = "";
       if(this.state.isHighlight) {
           itemClassName = "user-setting-item user-setting-item-highlight";
       }
       else {
           itemClassName = "user-setting-item";
       }
              
       return (
           <div className={itemClassName} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
              <Link to={this.props.targetUrl}>{this.props.text}</Link>
           </div>
       )
   }
});

var UserInfoAndSettings = React.createClass({
    
  getInitialState: function () {
    return {
        isShowSettingPanel: false,
        isHeaderHighlight: false,
    }
  },
  
  handleMouseEnterHeader : function(e) {
      this.setState({
        isShowSettingPanel: true,
        isHeaderHighlight: true,          
      })
  },
  
  handleMouseLeaveUserSettings : function(e) {
      this.setState({
        isShowSettingPanel: false,
        isHeaderHighlight: false,          
      })
  },  
  
    
  render: function(){
    var settingPanelInlineStyle = {};
    if(this.state.isShowSettingPanel) {
        settingPanelInlineStyle.visibility = "visible";
    }
    else {
        settingPanelInlineStyle.visibility = "hidden";
    }
    
    var headerClassName = "";
    if(this.state.isHeaderHighlight) {
        headerClassName = "user-setting-header user-setting-header-highlight";
    }
    else {
        headerClassName = "user-setting-header";
    }
      
    return (        
        <div className="user-setting" onMouseLeave={this.handleMouseLeaveUserSettings}>
            <div className={headerClassName} onMouseEnter={this.handleMouseEnterHeader}>
                <span>rany1234</span>
                <img src="setting.png" className="user-setting-header-setting-img" />
            </div>
            <div className="user-setting-panel" style={settingPanelInlineStyle}>
                <UserRoleInfo userRole={"Initiative Manager, Agent"} />
                <hr />
            
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"Manage My Book"} />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"My UCM Preferences"} />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"UCM Help & Training"} />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"Data Freshness"} />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"Diagnostics Info"} />
                <hr />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"My Settings"} />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"Provide Feedbacks"} />
                <hr />
                <SettingItem targetUrl={"/bob/dashboard/10000"} text={"Sign out"} />
            </div>
        </div>
    )
  }
});

module.exports = UserInfoAndSettings;