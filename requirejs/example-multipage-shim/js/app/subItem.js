/**
 * Created by yueych on 9/2/2016.
 */
define(function (require) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var SubItem = React.createClass({
        displayName: 'Cyy',
        render: function () {
            return (
                React.createElement('div', {className: "SubItem"},
                    "Hello! I am SubItem."
                )
            );
        }
    });

    return SubItem;
});