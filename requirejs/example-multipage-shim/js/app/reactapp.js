/**
 * Created by yueych on 8/31/2016.
 */
define(function (require) {
    var React = require('react'),
        ReactDOM = require('react-dom'),
        TestMid = require('testMid');

    TestMid.testFunction();
    TestMid.addReactComponent('cyy1');
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
    // ReactDOM.render(
    //     React.createElement(CommentBox, null),
    //     document.getElementById('cyy')
    // );



});
