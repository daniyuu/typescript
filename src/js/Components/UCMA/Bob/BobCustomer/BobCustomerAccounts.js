var React = require('react');
var ReactDOM = require('react-dom');

var BobCustomerAccounts = React.createClass({
  render: function(){
    return (
        <div className="book-content" >    
            bob customer accounts {this.props.params.customerId}        
        </div>
    )
  }
});

module.exports = BobCustomerAccounts;