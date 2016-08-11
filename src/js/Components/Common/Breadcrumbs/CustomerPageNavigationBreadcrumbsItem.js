var React = require('react');
var ReactDOM = require('react-dom');

var BobCustomerPageNavigationStore = require('../../../Stores/BobCustomerPageNavigationStore');
var CustomerStore = require('../../../Stores/CustomerStore');
var BobBreadcrumbStore = require('../../../Stores/BobBreadcrumbStore');

var CustomerPageNavigationItem = React.createClass({
    
    contextTypes: {
        router: React.PropTypes.object
    },
   
    getInitialState: function() {
        return {
            isHighlight: false
        };
    },

    handleMouseEnter: function(e) {
        this.setState({isHighlight: true});
    },
    
    handleMouseLeave: function(e) {
        this.setState({isHighlight: false});
    },       
    
    handleClick: function(e) {        
      this.context.router.push(this.props.targetUrl);           
      this.props.select(this.props.text);          
    },
   
   render: function () {
       var itemClassName = "";
       if (this.state.isHighlight) {
           itemClassName = "page-navigation-item page-navigation-item-highlight";           
       }
       else {
           itemClassName = "page-navigation-item";
       }
              
        return (
            <div className={itemClassName}
                 onMouseEnter={this.handleMouseEnter} 
                 onMouseLeave={this.handleMouseLeave}
                 onClick={this.handleClick} >
                <span>{this.props.text}</span>
            </div>
        )
   }        
});

var CustomerPageNavigationBreadcrumbsItem = React.createClass({

    getInitialState: function() {
        return {
            isShowBig: false
        };
    },
    
    handleHeaderClick: function (e) {
        this.setState({isShowBig : !this.state.isShowBig});    
    },
    
    selectOnePage: function(pageName) { 
        BobBreadcrumbStore.setCurrentSelectedCustomerPage(pageName);
        this.setState({
            isShowBig: false
        });
    },    

    leave: function(e) {
        this.setState({isShowBig: false});     
    },
        
    render: function() {
       var currentSelectedBook = BobBreadcrumbStore.getCurrentSelectedBook();
       var currentSelectedCustomer = BobBreadcrumbStore.getCurrentSelectedCustomer();
       var currentBobCustomerSelectedPage = BobBreadcrumbStore.getCurrentSelectedCustomerPage();
       
       var bigInlineStyle = {};
       if (this.state.isShowBig) {
           bigInlineStyle.visibility = "visible";
       }
       else {
           bigInlineStyle.visibility = "hidden";
       }
               
       var pageNodes = [];
       var customerPages = BobCustomerPageNavigationStore.getAllPages();
        for(var p in customerPages) {
            // if (p === currentBobCustomerSelectedPage) {
            //     continue;
            // }
            
            var targetUrl =  BobCustomerPageNavigationStore.getTargetUrl(p, currentSelectedBook.bookId, currentSelectedCustomer.customerId);            
            var oneNode = (<CustomerPageNavigationItem text={p} select={this.selectOnePage} targetUrl={targetUrl} />)
            pageNodes.push(oneNode);
        }    
                                            
        return (
            <div className="breadcrumbs-item customer-page-navigation-breadcrumbs-item" onMouseLeave={this.leave}>
                <div className="small"  onClick={this.handleHeaderClick} >
                    <span>{currentBobCustomerSelectedPage}</span>
                </div>
                <div className="big"  style={bigInlineStyle}>
                    {pageNodes}
                </div> 
            </div>
        )        
    }
});

module.exports = CustomerPageNavigationBreadcrumbsItem;