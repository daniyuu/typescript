/**
 * Created by yueych on 8/31/2016.
 */
// define(['require','./cyy'],function (require, cyy) {
// define(function (require) {
//     var React = require('react');
//     var ReactDOM = require('react-dom');
//     var cyy = require('./cyy');
//     var TestMid = require('testMid');
//     // var cyyjsx = require('./cyyjsx');
//     var TestRequire = require('./testrequire');
//
//     TestMid.renderComponent(cyy,'cyy2');
//     TestMid.renderComponent(TestRequire,'cyy1');
//
//     ReactDOM.render(
//         React.createElement(cyy, null),
//         document.getElementById('cyy')
//     );
//
// });


define(['react', 'react-dom', './cyy', 'testMid', './testrequire', 'es6!./cyyjsx'], function (React, ReactDOM, cyy, TestMid, TestRequire, cyyjsx) {
    // var React = require('react');
    // var ReactDOM = require('react-dom');
    // var cyy = require('./cyy');
    // var TestMid = require('testMid');
    // // var cyyjsx = require('./cyyjsx');
    // var TestRequire = require('./testrequire');

    TestMid.renderComponent(cyy, 'cyy2');
    TestMid.renderComponent(TestRequire, 'cyy1');
    TestMid.renderComponent(cyyjsx, 'cyy3');

    ReactDOM.render(
        React.createElement(cyy, null),
        document.getElementById('cyy')
    );

});
