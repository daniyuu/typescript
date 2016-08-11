var React = require('react');
var ReactDOM = require('react-dom');

var TopContent = require('./TopContent');

var TopBottomContainer = require('../Common/Layout/TopBottomContainer');
var ContainerContent = require('../Common/Layout/ContainerContent');

var Home = React.createClass({
  render: function(){
    return (
        <TopBottomContainer BlockClassName={"box"}>
           <ContainerContent contentPosition={"top"} BlockClassName={"top"}>
                <TopContent />
           </ContainerContent>
           <ContainerContent contentPosition={"bottom"} BlockClassName={"bottom"}>
                {this.props.children}
           </ContainerContent>
        </TopBottomContainer>
    )
  }
});

module.exports = Home;