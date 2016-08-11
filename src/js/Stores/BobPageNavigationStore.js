var AppDispatcher = require('../Dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UCMConstants = require('../Constants/UCMConstants');
var assign = require('object-assign');

var _bobPages = {
    "Bob Dashboard" : "/bob/dashboard/",
    "Bob Customers" :  "/bob/customers/",
    "Bob Accounts" : "/bob/accounts/",
    "Bob Agencies" :  "/bob/agencies/",
    "Bob Opportunities" : "/bob/opportunities/",
    "Bob Alerts" : "/bob/alerts/",
    "Bob Contacts" : "/bob/contacts/"
};

var BobPageNavigationStore = assign({}, EventEmitter.prototype, {
    
    getBobNavigations : function () {
        return _bobPages;
    },
    
    getDefaultBobNavigations: function() {
        return "Bob Dashboard";
    },
    
    getBobPageNameByComponentDisplayName: function (displayName) {
        switch (displayName) {
            case "BobDashboard": {
                return "Bob Dashboard";
            }
            case "BobCustomers": {
                return  "Bob Customers";
            }
            case "BobAccounts": {
                return "Bob Accounts";
            }
            case "BobAgencies": {
                return  "Bob Agencies";
            }           
            case "BobOpportunities": {
                return "Bob Opportunities";
            }
            case "BobAlerts": {
                return "Bob Alerts";
            }
            case "BobContacts": {
                return "Bob Contacts";
            }
            default: {
                return null;
            }                                             
        }
    },
    
    getBobPageNameByUrlToken: function (urlToken) {
        switch (urlToken) {
            case "dashboard": {
                return "Bob Dashboard";
            }
            case "customers": {
                return  "Bob Customers";
            }
            case "accounts": {
                return "Bob Accounts";
            }
            case "agencies": {
                return  "Bob Agencies";
            }           
            case "opportunities": {
                return "Bob Opportunities";
            }
            case "alerts": {
                return "Bob Alerts";
            }
            case "contacts": {
                return "Bob Contacts";
            }
            default: {
                return null;
            }                                             
        }
    }    
});

module.exports = BobPageNavigationStore;