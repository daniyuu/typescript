/**
 * Created by yueych on 9/2/2016.
 */
define(['react','react-dom'], function (React, ReactDOM) {
    var testrequire = React.createClass({
        displayName: 'testrequire',
        render: function () {
            return (
                React.createElement('div', {className: "testrequire"},
                    "Hello! I am testrequire."
                )
            );
        }
    });

    return testrequire;
});