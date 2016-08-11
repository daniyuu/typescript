var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');

var SearchOption = require('./SearchOption');

var Search = React.createClass({
    getInitialState: function() {
        return {
            CanSearchAccount: true,
            CanSearchCustomer: true,
            CanSearchUserName: true,
            CanSearchFirstLastName: true,
            OptionVisibility : "hidden",
            SearchTextVisibility: "hidden",
            SearchText: ""
        };
    },
    
    searchTextChange: function (e) {        
        var text = e.target.value;
        var stateObj = {
                SearchText : e.target.value,
                OptionVisibility: "hidden"
            };
                  
        if(text !== null && text !== "" && text.length > 1) {            
            stateObj.OptionVisibility = "visible";
                       
            if(!isNaN(text)) {
                stateObj.CanSearchAccount = true,
                stateObj.CanSearchCustomer = true,
                stateObj.CanSearchUserName = false;
                stateObj.CanSearchFirstLastName = false;
            } else {
                stateObj.CanSearchAccount = true,
                stateObj.CanSearchCustomer = true,
                stateObj.CanSearchUserName = true;
                stateObj.CanSearchFirstLastName = true;                
            }
        }
        
        this.setState(stateObj);    
    },
    
    clickOneOption : function(e, option) {
        this.setState({
                SearchText : "",
                OptionVisibility: "hidden",
                SearchTextVisibility: "hidden"
            });
    },
    
    showSearchText: function (e) {
        if (this.state.SearchTextVisibility === "hidden") {
            this.setState({
                SearchTextVisibility: "visible"
            });
        }
    },
    
    handleMouseLeaveSearch: function (e) {
        if (this.state.SearchText !== "") {
            return;
        }
        
        if (this.state.SearchTextVisibility === "visible") {
            this.setState({
                SearchTextVisibility: "hidden"
            });
        }        
    },
             
  render: function(){    
    var searchNodes = [];
    
    if (this.state.CanSearchAccount) {
        searchNodes.push(
            <SearchOption optionText={"Account Name or Account Number"} clickOneOption={this.clickOneOption} searchOption={"Account"} /> 
        );
    }
    
    if (this.state.CanSearchCustomer) {
        searchNodes.push(
            <SearchOption optionText={"Customer Name or Customer ID"}  clickOneOption={this.clickOneOption} searchOption={"Customer"}/>
        );
    }
    
    if (this.state.CanSearchUserName) {
        searchNodes.push(
            <SearchOption optionText={"Username"}  clickOneOption={this.clickOneOption} searchOption={"User"}/>
        );
    }
    
    if (this.state.CanSearchFirstLastName) {
        searchNodes.push(
            <SearchOption optionText={"First and Last Name"}  clickOneOption={this.clickOneOption} searchOption={"FirstLastName"}/>
        );
    }

    return (
      <div className="search" onMouseLeave={this.handleMouseLeaveSearch}>
        <div className="search-input">
            <input 
                type="text" 
                className="search-text" 
                placeholder="Input at least two chars to search"
                value = {this.state.SearchText} 
                onChange= {this.searchTextChange}
                style={{visibility: this.state.SearchTextVisibility }}
            />
            <img src="search.png" className="search-icon" onMouseEnter={this.showSearchText} />
        </div>        
        <div className="search-options" style={{visibility: this.state.OptionVisibility }}>
            {searchNodes}
        </div>
      </div>
    )
  }
});

module.exports = Search;