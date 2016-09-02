// (function () {
var root = this;

var TestMid = function (obj) {
    return new wrapper(obj);
};
var wrapper = function (obj) {
    this._wrapped = obj;
};

TestMid.VERSION = '0.0.1';

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = TestMid;
    }
    exports.TestMid = TestMid;
} else {
    root['TestMid'] = TestMid;
}

TestMid.testFunction = function () {
    console.info("testFunction");
};

var React = root.React;
if (!React && (typeof require !== 'undefined')) React = require('react');

var ReactDOM = root.ReactDOM;
if (!ReactDOM && (typeof require !== 'undefined')) ReactDOM = require('react-dom');


TestMid.addReactComponent = function (label) {
    console.info("here");
    var CommentBox = React.createClass({
        displayName: 'CommentBox',
        render: function () {
            return (
                React.createElement('div', {className: "commentBox"},
                    "Hello, world! I am a CommentBox from TestMid."
                )
            );
        }
    });
    ReactDOM.render(
        React.createElement(CommentBox, null),
        document.getElementById(label)
    );
};

TestMid.bindReactAction = function (component, data, action, id) {
    ReactDOM.render(
        React.createElement(component, {data: data, action: action}, null),
        document.getElementById(id)
    );
};

TestMid.renderComponent = function (component, id) {
    ReactDOM.render(
        React.createElement(component, null),
        document.getElementById(id)
    );
};


