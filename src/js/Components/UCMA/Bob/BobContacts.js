var React = require('react');
var ReactDOM = require('react-dom');

var BobContacts = React.createClass({
  render: function(){
    return (
        <div className="book-content" >
            <div>
                <div>
                    <img src="performance.png" />
                    <hr />
                </div>
                
                <div>
                    <img src="grid.png" />
                </div>

            </div>              
        </div>
    )
  }
});

module.exports = BobContacts;