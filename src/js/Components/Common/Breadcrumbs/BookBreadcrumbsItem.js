var React = require('react');
var ReactDOM = require('react-dom');

var Link = require('react-router').Link;

var BookStore = require('../../../Stores/BookStore');
var BobBreadcrumbStore = require('../../../Stores/BobBreadcrumbStore');

var BookSelectionItem = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            isHighlight: false
        };
    },

    handleMouseEnter: function(e) {
        this.setState({isHighlight: true});
    },
    
    handleMouseLeave: function(e) {
        this.setState({isHighlight: false});
    },
    
    removeBookFromMyFavorite: function(e) {
        this.props.removeBookFromMyFavorite(this.props.bookId);
        e.stopPropagation();
    },
    
    selectBook : function(e) {
      this.context.router.push(this.props.targetUrl);   
      this.props.changeCurrentSelectBook(this.props.bookId);
    },

    render: function() {
        var itemClassName = "";
        if (this.state.isHighlight) {
            itemClassName = "book-selection-item book-selection-item-highlight";
        }
        else {
            itemClassName = "book-selection-item";
        }
                
        var removeButton = null;
        if(!this.props.isMyBook) {
            removeButton = (
                <button className="book-selection-item-remove-button" onClick={this.removeBookFromMyFavorite}>X</button>
            )
        }
        
        var text = this.props.name + "'s Book";
        if(this.props.isMyBook) {
            text = "My Book";
        }
                
        return (
            <div className={itemClassName} 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
                onClick={this.selectBook} >
                    <span>{text}</span>
                    {removeButton}                
            </div>
        )
    }
    
});


var AddBookItem = React.createClass({
    getInitialState: function() {
        return {
            isHighlight: false
        };
    },  
    
  addBookToMyFavorite: function(e) {
    this.props.addBookToMyFavorite(this.props.bookId);
  },
  
  handleMouseEnter: function(e) {
    this.setState({isHighlight: true});
  },
  
  handleMouseLeave: function(e) {
      this.setState({isHighlight: false});
  },
    
  render: function() {
    var itemClassName = "";
    if (this.state.isHighlight) {
        itemClassName = "add-book-item add-book-item-highlight";
    }
    else {
        itemClassName = "add-book-item";
    }
    
    var text = this.props.name + " (" + this.props.alias + ")";
      
    return (
        <div className={itemClassName} 
            onClick={this.addBookToMyFavorite} 
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave} >            
            <span>{text}</span>
        </div>
    )
  }
});

var AddBookPanel = React.createClass({
    getInitialState: function() {
        return {
            filterString: ''
        };
    },
    
    handleFilterStringTextChange: function (e) {
        this.setState({filterString : e.target.value});
    },   
          
    render: function() {
        if (!this.props.isShow) {
            return null;
        }
        
        var filtered = null;
        if (this.state.filterString === '') {
            filtered = BookStore.getRemainingBooks();
        }
        else {
            filtered = BookStore.filterRemainingBooks(this.state.filterString);
        }
        
        var nodes = filtered.map(function(value) {
            return (
                <AddBookItem name={value.name} 
                    alias={value.alias} 
                    bookId={value.bookId}
                    addBookToMyFavorite={this.props.addBookToMyFavorite}
                    key={"add_book_panel_" + value.bookId}
                     />
            );
        }.bind(this)); 
            
        return (
            <div className="add-book-panel">
                <input 
                    type="text" 
                    className="add-book-panel-text" 
                    placeholder="Filter by Name or Alias"
                    value = {this.state.filterString} 
                    onChange= {this.handleFilterStringTextChange}
                />                
                <div className="add-book-panel-item-list">
                    {nodes}
                </div>
            </div>
            )
        }
});


var BookBreadcrumbsItem = React.createClass({
   
    getInitialState: function() {
        return {
            isShowBig: false,
            isShowAddBookPanel: false
        };
    },
    
    handleHeaderClick: function (e) {
        this.setState({isShowBig : !this.state.isShowBig});
    },
    
    removeBookFromMyFavorite: function(bookId) {
        console.log("remove book with bookid:" + bookId);
        BookStore.removeBookFromMyFavoriteBooks(bookId);
        this.forceUpdate();
    },
    
    addBookToMyFavorite: function(bookId) {
        BookStore.addBookToMyFavoriteBooks(bookId);
        this.setState({isShowAddBookPanel: false});     
    },
    
    toggleAddBookPanel: function(e) {
        this.setState({isShowAddBookPanel: !this.state.isShowAddBookPanel});
    },
    
    leave: function(e) {
        this.setState({isShowBig: false});     
    },
    
    changeCurrentSelectBook: function (bookId) {
        BobBreadcrumbStore.setCurrentSelectedBook(bookId);
        this.setState({isShowBig: false});
    },
              
   render: function () {
       var bigInlineStyle = {};
       if (this.state.isShowBig) {
           bigInlineStyle.visibility = "visible";
       }
       else {
           bigInlineStyle.visibility = "hidden";
       }
       
       var currentSelectedBook = BobBreadcrumbStore.getCurrentSelectedBook();
       
       var favoriteBooks = BookStore.getMyFavoriteBooks();
       var myBook = BookStore.getMyBook(); 
       
       var headerText = "";
       if (currentSelectedBook === myBook) {
           headerText = "My Book";
       }
       else {
           headerText = currentSelectedBook.name + "'s Book";
       }
              
       var bookSelectionNodes = [];
       
       var myBookSelectionItem = <BookSelectionItem 
                                    targetUrl={"/bob/dashboard/" + myBook.bookId} 
                                    name={myBook.name} 
                                    isMyBook={true} 
                                    bookId ={myBook.bookId}
                                    changeCurrentSelectBook = {this.changeCurrentSelectBook} 
                                    key={"select_book_" + myBook.bookId} />;
                                    
       bookSelectionNodes.push(myBookSelectionItem);
       favoriteBooks.map(function(value) {
          var node =  <BookSelectionItem 
                        targetUrl={"/bob/dashboard/" + value.bookId} 
                        name={value.name} 
                        isMyBook={false} 
                        removeBookFromMyFavorite = {this.removeBookFromMyFavorite}
                        bookId ={value.bookId}
                        changeCurrentSelectBook = {this.changeCurrentSelectBook} 
                        key={"select_book_" + value.bookId}
                        />;
          bookSelectionNodes.push(node);
       }.bind(this));
       
       return (
           <div className="breadcrumbs-item book-breadcrumbs-item" onMouseLeave={this.leave}>
                <div className="small" onClick={this.handleHeaderClick}>
                    <span>{headerText}</span>
                </div>
                <div className="big" style={bigInlineStyle}>
                    {bookSelectionNodes}
                    <div className="add-a-book">
                        <button onClick={this.toggleAddBookPanel}>Add a book</button>
                        <AddBookPanel isShow={this.state.isShowAddBookPanel} addBookToMyFavorite={this.addBookToMyFavorite} />
                    </div>
                </div>                
           </div>
       )
   } 
});

module.exports = BookBreadcrumbsItem;