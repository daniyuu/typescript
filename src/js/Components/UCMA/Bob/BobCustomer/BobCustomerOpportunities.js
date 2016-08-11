var React = require('react');
var ReactDOM = require('react-dom');

var BobCustomerOpportunities = React.createClass({
  render: function(){
    return (
        <div className="book-content" >      
            bob customer opportunities {this.props.params.customerId}       
        </div>
    )
  }
});

module.exports = BobCustomerOpportunities;