var React = require('react');
var ReactDOM = require('react-dom');

var BobCustomerDashboard = React.createClass({
  render: function(){
    return (
        <div className="book-content" >          
            bob customer dashboard {this.props.params.customerId}
        </div>
    )
  }
});

module.exports = BobCustomerDashboard;