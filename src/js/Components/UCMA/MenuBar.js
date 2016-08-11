var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');
var Link = require('react-router').Link;

var MenuItem = React.createClass({
    getInitialState: function() {
        return {
            highlight : false
        };
    },    
    
    handleMouseEnter : function (e) {
        this.setState({highlight:true});
    },
    
    handleMouseLeave: function (e) {
        this.setState({highlight:false});
    },
    
    render : function () {
        var menuItemClassName = "";
        if (this.state.highlight) {
            menuItemClassName = "menu-item menu-item-highlight";            
        }
        else {
            menuItemClassName = "menu-item";
        }
        
        
        return (
            <div className={menuItemClassName} 
                 onMouseEnter={this.handleMouseEnter} 
                 onMouseLeave={this.handleMouseLeave} >
                <span className="menu-item-span">
                    {this.props.text}
                </span>
            </div>
        )   
    }        
});


var MenuGroupItem = React.createClass({
    getInitialState: function() {
        return {
            highlight : false
        };
    },    
    
    handleMouseEnter : function (e) {
        this.setState({highlight:true});
    },
    
    handleMouseLeave: function (e) {
        this.setState({highlight:false});
    },    
    
    render: function () {
        var menuGroupItemClassName = "";
        if(this.state.highlight) {
            menuGroupItemClassName = "menu-group-item menu-group-item-highligt";
        }
        else {
            menuGroupItemClassName = "menu-group-item";
        }
        
        
        return (
            <div className={menuGroupItemClassName}   
                 onMouseEnter={this.handleMouseEnter} 
                 onMouseLeave={this.handleMouseLeave} >
                <span className="menu-group-item-span" >
                    <Link to={this.props.targetUrl}>{this.props.text}</Link>                 
                </span>
            </div>
        )   
    }    
});

var MenuGroupSeparator = React.createClass({
   render: function () {
       return (
           <hr className="menu-group-items-separator"/>
       )
   } 
});

var MenuGroup = React.createClass({
    getInitialState: function() {
        return {
            showGroupItems: false,
            highlightHeader : false
        };
    },
    
    toggleGroupItems: function(e) {
        var newValue = !this.state.showGroupItems;
        this.setState({showGroupItems: newValue});
    },
    
    handleMouseEnterMenuGroup: function (e) {
        this.setState({
            showGroupItems: true,
            highlightHeader : true
        });
    },
    
    handleMouseLeaveMenuGroup: function(e) {
        this.setState({
            showGroupItems: false,
            highlightHeader : false
        });
    },
    

   render: function () {
        var groupItemInlineStyle = {};
        if (this.state.showGroupItems) {
            groupItemInlineStyle.visibility = "visible";            
        }
        else {
            groupItemInlineStyle.visibility = "hidden";
        }       
        
        var menuGroupHeadClassName = "";
        if (this.state.highlightHeader) {
            menuGroupHeadClassName = "menu-group-head menu-group-header-highlight";
        }
        else {
            menuGroupHeadClassName = "menu-group-head";
        }
       
       return (
           <div className="menu-group" 
                onMouseEnter={this.handleMouseEnterMenuGroup} 
                onMouseLeave={this.handleMouseLeaveMenuGroup} >
                <div className={menuGroupHeadClassName}
                    onClick={this.toggleGroupItems} >
                    <span className="menu-group-head-span">
                        {this.props.text}
                    </span>
                    <img src="caret_down.png" className="menu-group-head-down-img"/>
                </div>
                <div className="menu-group-items" 
                    style={groupItemInlineStyle} >
                    {this.props.children}
                </div>           
           </div>           
       )
   } 
});

var MenuBar = React.createClass({
    render: function() {         
       
    var bobDashboardUrl = "/bob/dashboard/" + this.props.currentLoginUserId;
    var bobCustomersUrl = "/bob/customers/" + this.props.currentLoginUserId;
    var bobAccountsUrl = "/bob/accounts/" + this.props.currentLoginUserId;
    var bobAgenciesUrl = "/bob/agencies/" + this.props.currentLoginUserId;
    var bobAlertsUrl = "/bob/alerts/" + this.props.currentLoginUserId;
    var bobOpportunitiesUrl = "/bob/opportunities/" + this.props.currentLoginUserId;
    var bobContactsUrl = "/bob/contacts/" + this.props.currentLoginUserId;
    
    // var myOpportunitiesUrl = "/myopportunities";
    // var myTeamUrl = "/myteam";
    // var myQueueUrl = "/myqueue";
    // var myWatchlistUrl = "/mywatchlist";
    // var jobQueueUrl = "/jobqueue";
    // var recentlyViewedAccountUrl = "/recentviewedaccounts";        
        
        
        
             
        return (
            <div className={"menu-bar"}>
                <MenuGroup text="Book Of Business" >
                    <MenuGroupItem text="Dashboard" targetUrl={bobDashboardUrl} />
                    <MenuGroupItem text="Customers" targetUrl={bobCustomersUrl} />
                    <MenuGroupItem text="Accounts" targetUrl={bobAccountsUrl} />
                    <MenuGroupItem text="Agencies" targetUrl={bobAgenciesUrl} />
                    <MenuGroupItem text="Alerts" targetUrl={bobAlertsUrl} />
                    <MenuGroupItem text="Opportunities" targetUrl={bobOpportunitiesUrl} />
                    <MenuGroupItem text="Contacts" targetUrl={bobContactsUrl} />                
                </MenuGroup>
                
                <MenuItem text="My Opportunities" />
                <MenuItem text="Job Queue" />
                {/* <MenuItem text="My Teams" />
                <MenuItem text="My Queue" /> */ } 
                
                <MenuGroup text="My Favorites" >
                    <MenuGroupItem text="My Watchlist" targetUrl={bobDashboardUrl} />
                    <MenuGroupItem text="Recent" targetUrl={bobDashboardUrl} />                
                </MenuGroup>
                                
                <MenuGroup text="Other" >
                    <MenuGroupItem text="Initiative Management" targetUrl={bobDashboardUrl} />
                </MenuGroup>
                
                <MenuGroup text="Bing Ads" >
                    <MenuGroupItem text="Campaigns" targetUrl={bobDashboardUrl} />
                    <MenuGroupItem text="Reports" targetUrl={bobDashboardUrl} />
                    <MenuGroupSeparator />
                    <MenuGroupItem text="Ad Inquiry" targetUrl={bobDashboardUrl} />
                    <MenuGroupItem text="Ad Preview And Diagnostic Tool" targetUrl={bobDashboardUrl} />
                    <MenuGroupItem text="Research Keywords" targetUrl={bobDashboardUrl} />
                    <MenuGroupSeparator />
                    <MenuGroupItem text="Campaign Analytics" targetUrl={bobDashboardUrl} />
                </MenuGroup>
            </div>
        )
    }
});

module.exports = MenuBar;