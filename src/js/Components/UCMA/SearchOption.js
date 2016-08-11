var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');

var SearchOption = React.createClass({
    getInitialState: function() {
        return {
            isMouseEnter: false
        };
    },
       
  handleClick : function (e) {
      this.props.clickOneOption(e, this.props.searchOption);
  },
  
  enter: function(e) {
    this.setState({isMouseEnter: true});
  },
  
  leave: function(e) {
      this.setState({isMouseEnter: false});
  },
    
  render: function() {
    var divClass = "";
    if (this.state.isMouseEnter) {
        divClass = "search-option-item search-option-item-highlight";
    }
    else {
        divClass = "search-option-item";
    }      
      
    return (
        <div className={divClass}  onClick={this.handleClick} onMouseEnter={this.enter} onMouseLeave={this.leave}>
            <span>Search by: {this.props.optionText}</span>
        </div>
    )
  }
});

module.exports = SearchOption;
