var React = require('react');
var ReactDOM = require('react-dom');

var BookStore = require('../../../Stores/BookStore');
var BobPageNavigationStore = require('../../../Stores/BobPageNavigationStore');
var BobBreadcrumbStore = require('../../../Stores/BobBreadcrumbStore');

var BobPageNavigationItem = React.createClass({

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

var BobPageNavigationBreadcrumbsItem = React.createClass({

    getInitialState: function() {
        return {
            isShowBig: false
        };
    },
                
    handleHeaderClick: function (e) {
        this.setState({isShowBig : !this.state.isShowBig});    
    },

    leave: function(e) {
        this.setState({isShowBig: false});     
    },
    
    selectOnePage: function(pageName) { 
        BobBreadcrumbStore.setCurrentSelectedBobPage(pageName);
        this.setState({
            isShowBig: false
        });
    },
            
   render: function () {                      
        var currentSelectedBook = BobBreadcrumbStore.getCurrentSelectedBook();
        var currentSelectedBobPageName = BobBreadcrumbStore.getCurrentSelectedBobPage();
                      
        var nodes = [];
        var bobNavigations = BobPageNavigationStore.getBobNavigations();           
        for(var p in bobNavigations) {
            // if (p === currentSelectedBobPageName) {
            //     continue;
            // }
            
            var targetUrl = bobNavigations[p] + currentSelectedBook.bookId;
            var oneNode = (<BobPageNavigationItem text={p} select={this.selectOnePage} targetUrl={targetUrl} />)
            nodes.push(oneNode);
        }
                             
        var bigInlineStyle = {};
        if (this.state.isShowBig) {
                bigInlineStyle.visibility = "visible";            
        }
        else {
            bigInlineStyle.visibility = "hidden";
        }       
        
        return (
            <div className="breadcrumbs-item page-navigation-breadcrums" onMouseLeave={this.leave}>
                    <div className="small" onClick={this.handleHeaderClick}>
                        <span>{currentSelectedBobPageName}</span>
                    </div>
                    <div className="big" style={bigInlineStyle}>
                        {nodes}
                    </div>                
            </div>
        )
   } 
});

module.exports = BobPageNavigationBreadcrumbsItem;