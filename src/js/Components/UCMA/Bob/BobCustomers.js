var React = require('react');
var ReactDOM = require('react-dom');

var Link = require('react-router').Link;

var CustomerStore = require('../../../Stores/CustomerStore')

var CustomerLink = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },
       
   handleClick: function (e) {       
      var targetUrl = "/bob/customers/" + this.props.bookId + "/customer/" + this.props.customerId + "/dashboard";
      this.context.router.push(targetUrl);            
   },
   
   render: function () {
       return (
           <div onClick={this.handleClick}>
                <span>{this.props.customerName}</span>
           </div>
       )
   } 
});

var BobCustomers = React.createClass({
        
  render: function() {
    var bookId = this.props.params.bookId;           
    var customers = CustomerStore.getCustomersByBookId(bookId);

    var nodes = [];
    if(customers !== null) {
        customers.forEach(function (value) {
            nodes.push(
                <CustomerLink customerName={value.customerName} customerId={value.customerId} bookId={bookId} />
            );    
        }.bind(this));
    }               
               
    return (
        <div className="book-content" >
            <div className="debug_bob_customers">
                {nodes}
            </div>            
            <div>                
                <div>
                    <img src="grid.png" />
                </div>

            </div>             
        </div>
    )
  }
});

module.exports = BobCustomers;