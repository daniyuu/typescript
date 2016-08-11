var React = require('react');
var ReactDOM = require('react-dom');

var BookBreadcrumbsItem = require('./BookBreadcrumbsItem');
var BobPageNavigationBreadcrumbsItem = require('./BobPageNavigationBreadcrumbsItem');
var CustomerBreadcrumbsItem = require('./CustomerBreadcrumbsItem');
var CustomerPageNavigationBreadcrumbsItem = require('./CustomerPageNavigationBreadcrumbsItem');

var BobBreadcrumbStore = require('../../../Stores/BobBreadcrumbStore');

var BreadcrumbsItem = React.createClass({
   
   render: function () {
       return (
           <div className="breadcrumbs-item">
                {this.props.children}
           </div>
       )
   } 
});

var BreadcrumbsConnector = React.createClass({
   
   render : function () {
       return (
           <span className="breadcrumbs-connector">
            {">"}
           </span>
       )
   } 
});

var BreadcrumbsBar = React.createClass({
    render: function() {
        var bobBreadcrumbSetting = BobBreadcrumbStore.getCurrentBreadcrumbSetting();
        
        var items = [];
        
        if(bobBreadcrumbSetting.currentSelectedBook !== null 
            && bobBreadcrumbSetting.currentselectedBobPage !== null) {            
            items.push(<BookBreadcrumbsItem />);
            items.push(<BreadcrumbsConnector/>);
            items.push(<BobPageNavigationBreadcrumbsItem />);
        }
        
        if (bobBreadcrumbSetting.currentSelectedCustomer !== null 
            && bobBreadcrumbSetting.currentSelectedCustomerPage !== null) {
                items.push(<BreadcrumbsConnector/>);
                items.push(<CustomerBreadcrumbsItem />);
                items.push(<BreadcrumbsConnector/>);
                items.push(<CustomerPageNavigationBreadcrumbsItem />);                
            }
   
        return (
            <div className="breadcrumbs-bar">
                {items}
            </div>
        )        
    }
});

module.exports = BreadcrumbsBar;