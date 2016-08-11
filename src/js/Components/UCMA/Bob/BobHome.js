var React = require('react');
var ReactDOM = require('react-dom');

var SettingBar = require('../../SettingBar');
var DateSetting = require('../../SettingBar/DateSetting');
var SwitcherSetting = require('../../SettingBar/SwitcherSetting');
var GlobalFilterSetting = require('../../SettingBar/GlobalFilterSetting');

var BobBreadcrumbStore = require('../../../Stores/BobBreadcrumbStore');
var BreadcrumbsBar = require('../../Common/Breadcrumbs/BreadcrumbsBar');

var BobHome = React.createClass({
    render: function() {      
        BobBreadcrumbStore.extractStateFromCurrentUrl(this.props.routes, this.props.params);
    
        return (
            <div className="bob">
            <div className="bob-top">
                <BreadcrumbsBar />
                
                <SettingBar>
                    <div className="bob-tile-global-setting">
                        <DateSetting />
                        <hr />
                        <SwitcherSetting />
                        <hr />
                        <GlobalFilterSetting />                     
                    </div>
                </SettingBar>                         
            </div>
            
            {this.props.children}          
            </div>
        )
    }
});

module.exports = BobHome;