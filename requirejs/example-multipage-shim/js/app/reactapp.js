/**
 * Created by yueych on 8/31/2016.
 */
// define(['require','./cyy'],function (require, cyy) {
define(function (require) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var cyy = require('./cyy');
    var TestMid = require('testMid');

    TestMid.renderComponent(cyy,'cyy2');

    ReactDOM.render(
        React.createElement(cyy, null),
        document.getElementById('cyy')
    );

});
