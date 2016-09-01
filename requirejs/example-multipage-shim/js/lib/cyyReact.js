// (function () {
var root = this;

var CyyReact = function (obj) {
    return new wrapper(obj);
};
var wrapper = function (obj) {
    this._wrapped = obj;
};

CyyReact.VERSION = '0.0.1';

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = CyyReact;
    }
    exports.CyyReact = CyyReact;
} else {
    root['CyyReact'] = CyyReact;
}

CyyReact.testFunction = function () {
    console.info("testFunction");
};

var React = root.React;
if (!React && (typeof require !== 'undefined')) React = require('react');

var ReactDOM = root.ReactDOM;
if (!ReactDOM && (typeof require !== 'undefined')) ReactDOM = require('react-dom');

var CyyReactPlus = root.CyyReactPlus;
if (!CyyReactPlus && (typeof require !== 'undefined')) CyyReactPlus = require('cyyReactPlus');

CyyReact.Component2 = React.createClass({
    displayName: 'Component2',
    render: function () {
        return (
            React.createElement('div', {className: "component2"},
                "Component2."
            )
        );
    }
});


CyyReact.Component1 = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox from CyyReact.",
                React.createElement(CyyReactPlus.Component3, null)
            )
        );
    }
});

