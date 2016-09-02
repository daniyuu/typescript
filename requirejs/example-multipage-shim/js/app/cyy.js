/**
 * Created by yueych on 9/2/2016.
 */
define(function (require) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var SubItem = require('./subItem');
    var Cyy = React.createClass({
        displayName: 'Cyy',
        render: function () {
            return (
                React.createElement('div', {className: "Cyy"},
                    "Hello! I am Cyy.",
                    React.createElement(SubItem,null)
                )
            );
        }
    });

    return Cyy;
});