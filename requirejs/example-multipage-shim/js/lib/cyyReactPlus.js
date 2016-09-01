/**
 * Created by yueych on 9/1/2016.
 */
// (function () {
var root = this;

var CyyReactPlus = function (obj) {
    return new wrapper(obj);
};
var wrapper = function (obj) {
    this._wrapped = obj;
};

CyyReactPlus.VERSION = '0.0.1';

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = CyyReactPlus;
    }
    exports.CyyReactPlus = CyyReactPlus;
} else {
    root['CyyReactPlus'] = CyyReactPlus;
}

CyyReactPlus.testFunction = function () {
    console.info("testFunction");
};

var React = root.React;
if (!React && (typeof require !== 'undefined')) React = require('react');

var ReactDOM = root.ReactDOM;
if (!ReactDOM && (typeof require !== 'undefined')) ReactDOM = require('react-dom');

CyyReactPlus.Component3 = React.createClass({
    displayName: 'CyyReactPlus',
    render: function () {
        return (
            React.createElement('div', {className: "CyyReactPlus component3"},
                "CyyReactPlus. component3"
            )
        );
    }
});


