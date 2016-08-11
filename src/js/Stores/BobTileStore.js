var AppDispatcher = require('../Dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UCMConstants = require('../Constants/UCMConstants');
var assign = require('object-assign');

var _bobTiles = {
  SpendingTile: { IsShown: true, Name: "Spend USD" },
  RevenueTargetTile: { IsShown: true, Name: "Revenue Target" },
  OpenTicketsTile: { IsShown: true, Name: "Open Tickets" },
  OpportunitiesTile: { IsShown: true, Name: "Opportunities" },
  TotalAlertsTile: { IsShown: true, Name: "Total Alerts" },
  AvgDailySpendTile: { IsShown: true, Name: "Avg. Daily Spend USD" }   
};

var BobTileStore = assign({}, EventEmitter.prototype, {
    
    getAllUnshownTiles : function () {
        var tiles = [];
        for(var p in _bobTiles) {
            if (!_bobTiles[p].IsShown) {
                tiles.push(_bobTiles[p]);
            }
        }
        return tiles;
    },
    
    getAllShownTiles: function () {
        var tiles = [];
        for(var p in _bobTiles) {
            if (_bobTiles[p].IsShown) {
                tiles.push(_bobTiles[p]);
            }
        }
        return tiles;        
    },
    
    unshowTile: function (tileName) {
        for(var p in _bobTiles) {
            if(_bobTiles[p].Name === tileName) {
                _bobTiles[p].IsShown = false;
                break;
            }
        }
    },
    
    showTile: function (tileName) {
        for(var p in _bobTiles) {
            if(_bobTiles[p].Name === tileName) {
                _bobTiles[p].IsShown = true;
                break;
            }
        }        
    }
    
    
    
    // emitChange: function() {
    // this.emit(CHANGE_EVENT);
    // },

    // addChangeListener: function(callback) {
    // this.on(CHANGE_EVENT, callback);
    // },

    // removeChangeListener: function(callback) {
    // this.removeListener(CHANGE_EVENT, callback);
    // }
});

// AppDispatcher.register(function(action) {
//   switch(action.actionType) {
//     case UCMConstants.Book_AddBookToMyFavoriteBook: {
//         BookStore.addBookToMyFavoriteBooks(action.bookId);
//         BookStore.emitChange();
//         break;    
//     }
    
//     case UCMConstants.Book_RemoveBookToMyFavoriteBook: {
//         BookStore.removeBookFromMyFavoriteBooks(action.bookId);
//         BookStore.emitChange();
//         break;
//     }    
    
//     default:
//       // no op
//   }
// });

module.exports = BobTileStore;