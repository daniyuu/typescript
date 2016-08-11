var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./Components/UCMA/Home');

var BobHome = require('./Components/UCMA/Bob/BobHome');
var BobAccounts = require('./Components/UCMA/Bob/BobAccounts');
var BobAgencies = require('./Components/UCMA/Bob/BobAgencies');
var BobAlerts = require('./Components/UCMA/Bob/BobAlerts');
var BobContacts = require('./Components/UCMA/Bob/BobContacts');
var BobCustomers = require('./Components/UCMA/Bob/BobCustomers');
var BobOpportunities = require('./Components/UCMA/Bob/BobOpportunities');
var BobDashboard = require('./Components/UCMA/Bob/BobDashboard');

var BobCustomerDashboard = require('./Components/UCMA/Bob/BobCustomer/BobCustomerDashboard');
var BobCustomerAccounts = require('./Components/UCMA/Bob/BobCustomer/BobCustomerAccounts');
var BobCustomerOpportunities = require('./Components/UCMA/Bob/BobCustomer/BobCustomerOpportunities');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hasHistory = require('react-router').hasHistory;

ReactDOM.render(
    <Router history={hasHistory} > 
        <Route path="/" component={Home} >
            <Route path="/bob" component={BobHome} >
                <Route path="/bob/dashboard/:bookId" component={BobDashboard} />                                
                <Route path="/bob/customers/:bookId" component={BobCustomers} />    
                <Route path="/bob/accounts/:bookId" component={BobAccounts} />
                <Route path="/bob/agencies/:bookId" component={BobAgencies} />
                <Route path="/bob/opportunities/:bookId" component={BobOpportunities} />
                <Route path="/bob/alerts/:bookId" component={BobAlerts} />
                <Route path="/bob/contacts/:bookId" component={BobContacts} />
                
                <Route path="/bob/customers/:bookId/customer/:customerId/dashboard" component={BobCustomerDashboard} />
                <Route path="/bob/customers/:bookId/customer/:customerId/accounts" component={BobCustomerAccounts} />
                <Route path="/bob/customers/:bookId/customer/:customerId/opportunities" component={BobCustomerOpportunities} />
                                
            </Route>
        </Route>
    </Router>,
document.getElementById('app'));

            // <Route path="/myopportunities" component={MyOpportunities} />