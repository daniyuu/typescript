var React = require('react');
var ReactDOM = require('react-dom');

var Search = require('./Search');
var UCMLogo = require('./UCMLogo');
var MenuBar = require('./MenuBar');
var UserInfoAndSettings = require('./UserInfoAndSettings');

var TopContent = React.createClass({
    
  getInitialState: function () {
    return {
        currentLoginUserId: 10000
    }
  },    
    
  render: function(){

                    
    return (        
        <div>        
            <div className="topcontent-left">
                <UCMLogo workspaceName={"UCMA"} />                
                <MenuBar currentLoginUserId={this.state.currentLoginUserId} />
            </div>                        
            <div className="topcontent-right">            
                <Search />
                <UserInfoAndSettings />
            </div>
        </div>
    )
  }
});

module.exports = TopContent;