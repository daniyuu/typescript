var AppDispatcher = require('../Dispatchers/AppDispatcher');
var UCMConstants = require('../Constants/UCMConstants');

var BookActions = {

  addBookToMyFavoriteBooks: function(bookId) {
    AppDispatcher.dispatch({
      actionType: UCMConstants.Book_AddBookToMyFavoriteBook,
      bookId: bookId
    });
  },

  removeBookFromMyFavoriteBooks: function(bookId) {
    AppDispatcher.dispatch({
      actionType: UCMConstants.Book_RemoveBookToMyFavoriteBook,
      bookId: bookId
    });
  }
};

module.exports = BookActions;
