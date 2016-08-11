var React = require('react');
var ReactDOM = require('react-dom');

var GlobalFilterSetting = React.createClass({

    render: function() {
        return (
            <div className="globalfilter-setting">
                <img src="GlobalFilter.png" />         
            </div>
        )        
    }
});

module.exports = GlobalFilterSetting;