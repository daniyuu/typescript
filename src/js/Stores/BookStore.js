var AppDispatcher = require('../Dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UCMConstants = require('../Constants/UCMConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _allBooks = [
    {name: "name 1", alias: "alias1", bookId: 1},
    {name: "name 2", alias: "alias2", bookId: 2},
    {name: "name 3", alias: "alias3", bookId: 3},
    {name: "name 4", alias: "alias4", bookId: 4},
    {name: "name 5", alias: "alias5", bookId: 5},
    {name: "name 6", alias: "alias6", bookId: 6},
    {name: "name 7", alias: "alias7", bookId: 7},
    {name: "name 8", alias: "alias8", bookId: 8},
    {name: "name 9", alias: "alias9", bookId: 9},
    {name: "name 10", alias: "alias10", bookId: 10},
    {name: "name 11", alias: "alias11", bookId: 11},
    {name: "name 12", alias: "alias12", bookId: 12},
    {name: "name 13", alias: "alias13", bookId: 13},
    {name: "name 14", alias: "alias14", bookId: 14},
    {name: "name 15", alias: "alias15", bookId: 15},
    {name: "name 16", alias: "alias16", bookId: 16},
    {name: "name 17", alias: "alias17", bookId: 17},
    {name: "name 18", alias: "alias18", bookId: 18},
    {name: "name 19", alias: "alias19", bookId: 19},
    {name: "name 20", alias: "alias20", bookId: 20}
];

var _books = {
    myBook: { name : "ran yu", alias: "rany", bookId: 10000 },
    myFavoriteBooks: new Map(),
    remainingBooks: new Map()
};

(function initializeMockData() {    
    _allBooks.forEach(function (item,index) {
        if (item.bookId === 1 || item.bookId === 10 || item.bookId === 15) {
            _books.myFavoriteBooks.set(item.bookId, item);
        }
        else {
            _books.remainingBooks.set(item.bookId, item);
        }
    });
})();

function getMapValues(mapIterator) {
    var values = [];
    var next = mapIterator.next();
    while(!next.done) {
        values.push(next.value);
        next = mapIterator.next();
    }

    return values;
}

var BookStore = assign({}, EventEmitter.prototype, {

    getMyBook: function () {
        return _books.myBook;        
    },
    
    getRemainingBooks: function () {        
        return getMapValues(_books.remainingBooks.values());
    },
    
    getMyFavoriteBooks: function () {
        return getMapValues(_books.myFavoriteBooks.values());
    },
    
    addBookToMyFavoriteBooks: function (bookId) {
        if (_books.remainingBooks.has(bookId)) {
           _books.myFavoriteBooks.set(bookId, _books.remainingBooks.get(bookId));
           _books.remainingBooks.delete(bookId);
        }
        else {
            console.log("Can't find bookId" + bookId + " from remaining books");
        }
    },
    
    getBookByName: function(name) {
        if (_books.myBook.name === name) {
            return _books.myBook;
        }

        for(var i=0; i < _allBooks.length; ++i) {
            if(_allBooks[i].name === name) {
                return _allBooks[i];
            }
        }
        
        return null;        
    },
    
    getBookByBookId: function(bookId) {
        if (_books.myBook.bookId === bookId) {
            return _books.myBook;
        }

        for(var i=0; i < _allBooks.length; ++i) {
            if(_allBooks[i].bookId === bookId) {
                return _allBooks[i];
            }
        }
        
        return null;
    },
    
    filterRemainingBooks: function (filterStr) {
      var filtered = [];
      _books.remainingBooks.forEach(function (value) {
          if (value.name.includes(filterStr) || value.alias.includes(filterStr)) {
              filtered.push(value);
          }
      });
      
      return filtered;
    },
    
    removeBookFromMyFavoriteBooks: function (bookId) {
          if (_books.myFavoriteBooks.has(bookId)) {
           _books.remainingBooks.set(bookId, _books.myFavoriteBooks.get(bookId));
           _books.myFavoriteBooks.delete(bookId);
        }
        else {
            console.log("Can't find bookId" + bookId + " from my favorite books");
        }      
    },
    
    emitChange: function() {
    this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case UCMConstants.Book_AddBookToMyFavoriteBook: {
        BookStore.addBookToMyFavoriteBooks(action.bookId);
        BookStore.emitChange();
        break;    
    }
    
    case UCMConstants.Book_RemoveBookToMyFavoriteBook: {
        BookStore.removeBookFromMyFavoriteBooks(action.bookId);
        BookStore.emitChange();
        break;
    }    
    
    default:
      // no op
  }
});

module.exports = BookStore;