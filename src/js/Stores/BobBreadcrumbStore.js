var AppDispatcher = require('../Dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UCMConstants = require('../Constants/UCMConstants');
var assign = require('object-assign');

var BookStore = require('./BookStore');
var BobPageNavigationStore = require('./BobPageNavigationStore');
var BobCustomerPageNavigationStore = require('./BobCustomerPageNavigationStore');
var CustomerStore = require('./CustomerStore');

var _currentSelectedBook = BookStore.getMyBook();
var _currentSelectedBobPage = BobPageNavigationStore.getDefaultBobNavigations();
var _currentSelectedCustomer = null;
var _currentSelectedCustomerPage = null;

var BobBreadcrumbStore = assign({}, EventEmitter.prototype, {
    
    extractStateFromCurrentUrl: function(routes, params) {
        
        _currentSelectedBook = BookStore.getMyBook();
        _currentSelectedBobPage = BobPageNavigationStore.getDefaultBobNavigations();
        _currentSelectedCustomer = null;
        _currentSelectedCustomerPage = null;        
        
        if(params["bookId"] !== undefined && params["bookId"] !== null) {
            var book = BookStore.getBookByBookId(parseInt(params["bookId"], 10));
            if (book !== null) {
                _currentSelectedBook = book;
            }
        }
        
        if(params["customerId"] !== undefined && params["customerId"] !== null) {
            var customer = CustomerStore.getCustomerByCustomerId(parseInt(params["customerId"], 10));
            if (customer !== null) {
                _currentSelectedCustomer = customer;                
                CustomerStore.addRecentlyViewedCustomers(customer.customerId);                
            }
        }
        
        var tokens = routes[routes.length -1].path.split('/');        
        if (tokens.length > 1) {
            if(tokens[1] === "bob") {
                if (tokens[2] === undefined || tokens[2] === null || tokens[2] === "") {
                    _currentSelectedBobPage = BobPageNavigationStore.getDefaultBobNavigations();
                }
                else
                {
                    _currentSelectedBobPage = BobPageNavigationStore.getBobPageNameByUrlToken(tokens[2]);
                }                
            }
            
            if(tokens.length > 4) {
                if(tokens[4] === "customer") {
                    if (tokens[6] === undefined || tokens[6] === null || tokens[6] === "") {
                        _currentSelectedCustomerPage = BobCustomerPageNavigationStore.getDefaultPage();
                    }
                    else
                    {
                        _currentSelectedCustomerPage = BobCustomerPageNavigationStore.getPageNameByUrlToken(tokens[6]);
                    }                                
                }
            }
        }
    },
    
    getCurrentBreadcrumbSetting: function () {
        return {
            currentSelectedBook: _currentSelectedBook,
            currentselectedBobPage: _currentSelectedBobPage,
            currentSelectedCustomer: _currentSelectedCustomer,
            currentSelectedCustomerPage : _currentSelectedCustomerPage 
        };
    },
    
    getCurrentSelectedBook: function () {
      return _currentSelectedBook;
    },
           
    setCurrentSelectedBook: function (bookId) {
        var book = BookStore.getBookByBookId(bookId);
        if (book !== null) {
            _currentSelectedBook = book;
        }
    },
    
    getCurrentSelectedBobPage: function () {
        return _currentSelectedBobPage;
    },
    
    setCurrentSelectedBobPage: function (bobPageName) {
        _currentSelectedBobPage = bobPageName;
    },
    
    getCurrentSelectedCustomer: function () {
        return _currentSelectedCustomer;
    },
    
    setCurrentSelectedCustomer: function (customerId) {
        var customer = CustomerStore.getCustomerByCustomerId(parseInt(customerId, 10));
        if (customer !== null) {
            _currentSelectedCustomer = customer;
            CustomerStore.addRecentlyViewedCustomers(customer.customerId);            
        }
    },
    
    getCurrentSelectedCustomerPage: function () {
        return _currentSelectedCustomerPage;
    },
    
    setCurrentSelectedCustomerPage: function (customerPageName) {
        _currentSelectedCustomerPage = customerPageName;
    }
});

module.exports = BobBreadcrumbStore;




