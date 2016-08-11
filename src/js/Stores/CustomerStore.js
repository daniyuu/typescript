var AppDispatcher = require('../Dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UCMConstants = require('../Constants/UCMConstants');
var assign = require('object-assign');

var _allCustomers = [
    {customerName: "Customer 1", customerId: 1},
    {customerName: "Customer 2", customerId: 2},
    {customerName: "Customer 3", customerId: 3},
    {customerName: "Customer 4", customerId: 4},
    {customerName: "Customer 5", customerId: 5},
    {customerName: "Customer 6", customerId: 6},
    {customerName: "Customer 7", customerId: 7},
    {customerName: "Customer 8", customerId: 8},
    {customerName: "Customer 9", customerId: 9},
    {customerName: "Customer 10", customerId: 10}    
];

var _bookIdToCustomerId = {
  "10000": [1,2,3,4,5],
  "1": [1,2],
  "2": [3,4,5]  
};

var _recentlyViewedCustomerIds = new Map();

var CustomerStore = assign({}, EventEmitter.prototype, {
    
    getRecentlyViewedCustomers: function(bookId) {
        if (bookId === undefined) {
            return null;
        }
        else {
            var customerIds = _bookIdToCustomerId[bookId];            
            if (customerIds !== undefined) {
                var result = [];
                customerIds.forEach(function(value) {
                    if(_recentlyViewedCustomerIds.has(value)) {
                        result.push(value);
                    }
                }.bind(this));

                result = result.map(function(value) {
                    var customer = this.getCustomerByCustomerId(value);
                    return {
                        customerName: customer.customerName,
                        customerId : customer.customerId,
                        viewedTime: _recentlyViewedCustomerIds.get(value)
                    }
                }.bind(this));
                
                result.sort(function(left, right) {
                   if (left.viewedTime < right.viewedTime) {
                       return 1;
                   } 
                   else if (left.viewedTime > right.viewedTime) {
                       return -1;
                   }
                   else {
                       return 0;
                   }
                });
                
                return result.slice(0, 10);
            }
            else {
                return null;
            }
        }
    },
    
    addRecentlyViewedCustomers : function(customerId) {
        _recentlyViewedCustomerIds.set(customerId, Date.now());        
    },
    
    getCustomerByCustomerId: function (customerId) {        
        for(var i=0;i < _allCustomers.length; ++ i) {
            if (_allCustomers[i].customerId === customerId) {
                return _allCustomers[i];
            }
        }
        
        return null;
    },
    
    getCustomersByBookId: function (bookId) {
        var customerIds = _bookIdToCustomerId[bookId];
        if (customerIds !== undefined && customerIds !== null) {
            var customers = customerIds.map(function (value) {
                return this.getCustomerByCustomerId(value);
            }.bind(this));
            return customers;
        }
        
        return null;
    },
    
    filterCustomers: function (filterStr, bookId) {
        var filtered = [];
        
        if (bookId === undefined) {            
            _allCustomers.forEach(function (value) {
                if (value.customerName.includes(filterStr)) {
                    filtered.push(value);
                }
            });                 
        }
        else {
            var customers = this.getCustomersByBookId(bookId);
            if(customers !== null) {
                customers.forEach(function (value) {
                    if (value.customerName.includes(filterStr)) {
                        filtered.push(value);
                    }
                });                 
            }
        }
                
        return filtered;
    }
    
});

module.exports = CustomerStore;