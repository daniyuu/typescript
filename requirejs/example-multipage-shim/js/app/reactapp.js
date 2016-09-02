/**
 * Created by yueych on 8/31/2016.
 */
// define(['require','./cyy'],function (require, cyy) {
define(function (require) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var cyy = require('./cyy');
        // ReactDOM = require('react-dom'),
        // TestMid = require('testMid'),
        // CyyReact = require('cyyReact');

    // TestMid.testFunction();
    // TestMid.addReactComponent('cyy1');
    // TestMid.renderComponent(CyyReact.Component1,'cyy2');
    // CyyReact.testFunction();

    // var CommentBox = React.createClass({
    //     displayName: 'CommentBox',
    //     render: function () {
    //         return (
    //             React.createElement('div', {className: "commentBox"},
    //                 "Hello, world! I am a CommentBox."
    //             )
    //         );
    //     }
    // });
    ReactDOM.render(
        React.createElement(cyy, null),
        document.getElementById('cyy')
    );

    // console.info(cyy);



});
