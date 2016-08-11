var AppDispatcher = require('../Dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UCMConstants = require('../Constants/UCMConstants');
var assign = require('object-assign');


var _customerPages = {
    "Customer Dashboard" : "/bob/customers/:bookId/customer/:customerId/dashboard",
    "Customer Accounts" : "/bob/customers/:bookId/customer/:customerId/accounts",
    "Customer Opportunities" :  "/bob/customers/:bookId/customer/:customerId/opportunities"
};

var BobCustomerPageNavigationStore = assign({}, EventEmitter.prototype, {
    getAllPages : function () {
        return _customerPages;
    },
    
    getDefaultPage: function () {
        return "Customer Dashboard";
    },
    
    getPageNameByComponentDisplayName : function (displayName) {
        switch (displayName) {
            case "BobCustomerDashboard": {
                return "Customer Dashboard";
            }
            case "BobCustomerAccounts": {
                return  "Customer Accounts";
            }
            case "BobCustomerOpportunities": {
                return "Customer Opportunities";
            }
            default: {
                return null;
            }                                             
        }        
    },
    
    getTargetUrl: function(customerPageName, bookId, customerId) {
        var urlPattern = _customerPages[customerPageName];
        if (urlPattern !== undefined && urlPattern !== null) {
            return urlPattern.replace(':bookId', bookId).replace(':customerId', customerId);
        }
        
        return null;
    },
    
    getPageNameByUrlToken : function (urlToken) {
        switch (urlToken) {
            case "dashboard": {
                return "Customer Dashboard";
            }
            case "accounts": {
                return  "Customer Accounts";
            }
            case "opportunities": {
                return "Customer Opportunities";
            }
            default: {
                return null;
            }                                             
        }        
    }    
});

module.exports = BobCustomerPageNavigationStore;