var React = require('react');
var ReactDOM = require('react-dom');

var BobCustomerPageNavigationStore = require('../../../Stores/BobCustomerPageNavigationStore');
var CustomerStore = require('../../../Stores/CustomerStore');
var BobBreadcrumbStore = require('../../../Stores/BobBreadcrumbStore');

var CustomerSelectionItem = React.createClass({

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
      this.props.select(this.props.customerId);          
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

var SearchCustomer = React.createClass({
    getInitialState: function() {
        return {
            filterString: this.props.initialFilterString
        };
    },
    
    handleFilterStringTextChange: function (e) {
        this.setState({filterString : e.target.value});
    },
    
    selectOnePage: function (customerId) {
        this.props.selectOnePage(customerId);
    },
    
    componentWillReceiveProps: function(nextProps) {
        this.setState({filterString : this.props.initialFilterString });
    },
        
   render: function () {
       var currentSelectedBook = BobBreadcrumbStore.getCurrentSelectedBook();
       var currentBobCustomerSelectedPage = BobBreadcrumbStore.getCurrentSelectedCustomerPage();       
       
        if (!this.props.isShow) {
            return null;
        }
        
        var filtered = null;
        if (this.state.filterString !== '') {
            filtered = CustomerStore.filterCustomers(this.state.filterString, currentSelectedBook.bookId);
        }
       
        var customerSelectionNodes = []; 
        if (filtered !== null && filtered.length > 0) {
           filtered.forEach(function(value) {
            var targetUrl = BobCustomerPageNavigationStore.getTargetUrl(currentBobCustomerSelectedPage, 
                                                                        currentSelectedBook.bookId, 
                                                                        value.customerId);
            var oneNode = (<CustomerSelectionItem text={value.customerName} select={this.selectOnePage} targetUrl={targetUrl} customerId={value.customerId} />);
            customerSelectionNodes.push(oneNode);                                   
           }.bind(this));       
        }
                       
       return (
           <div className="serach-customer-in-breadcrumb">
                <input 
                    type="text" 
                    className="serach-customer-in-breadcrumb-text" 
                    placeholder="Search customer in current book with name" 
                    value = {this.state.filterString} 
                    onChange= {this.handleFilterStringTextChange}
                />                
                <div className="serach-customer-in-breadcrumb-item-list">
                    {customerSelectionNodes}
                </div>
           </div>
       )
   } 
});

var CustomerBreadcrumbsItem = React.createClass({

    getInitialState: function() {
        return {
            isShowBig: false,
            isShowSearchCustomer: false,
            initialFilterString: ''
        };
    },
    
    handleHeaderClick: function (e) {
        this.setState({isShowBig : !this.state.isShowBig});    
    },
    
    selectOnePage: function(customerId) { 
        BobBreadcrumbStore.setCurrentSelectedCustomer(parseInt(customerId,10));
        this.setState({
            isShowBig: false,
            isShowSearchCustomer: false,
            initialFilterString: ''
        });
    },
    
    leave: function(e) {
        this.setState({
            isShowBig: false,
            isShowSearchCustomer: false,
            initialFilterString: ''
        });     
    },    

    toggleSearchCustomerPanel: function(e) {
        this.setState({isShowSearchCustomer: !this.state.isShowSearchCustomer});
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
       
       var recentlyViewedCustomersInThisBook = CustomerStore.getRecentlyViewedCustomers(currentSelectedBook.bookId);
       var customerSelectionNodes = [];
       if(recentlyViewedCustomersInThisBook !== null 
            && recentlyViewedCustomersInThisBook.length > 0 ) {
           recentlyViewedCustomersInThisBook.forEach(function(value) {
               
            var targetUrl = BobCustomerPageNavigationStore.getTargetUrl(currentBobCustomerSelectedPage, 
                                                                        currentSelectedBook.bookId, 
                                                                        value.customerId);
            var oneNode = (<CustomerSelectionItem text={value.customerName} 
                                select={this.selectOnePage} 
                                targetUrl={targetUrl} 
                                customerId={value.customerId} />);
            customerSelectionNodes.push(oneNode);                                   
           }.bind(this));
       }
       else {
           customerSelectionNodes.push(
             <span>{"No recently viewed customers belong to current selected Book"}</span>  
           );
       }
                      
        return (
            <div className="breadcrumbs-item customer-breadcrumbs-item" onMouseLeave={this.leave}>
                <div className="small"  onClick={this.handleHeaderClick} >
                    <span>{currentSelectedCustomer.customerName}</span>
                </div>
                <div className="big"  style={bigInlineStyle}>
                    {customerSelectionNodes}
                    <div className="search-a-customer">
                        <button onClick={this.toggleSearchCustomerPanel}>Search Customer</button>
                        <SearchCustomer isShow={this.state.isShowSearchCustomer} 
                            selectOnePage={this.selectOnePage} 
                            initialFilterString={this.state.initialFilterString} />
                    </div>                    
                </div>                
            </div>
        )        
    }
});

module.exports = CustomerBreadcrumbsItem;