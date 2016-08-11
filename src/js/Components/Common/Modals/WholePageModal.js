var React = require('react');
var ReactDOM = require('react-dom');

var WholePageModal = React.createClass({
    handleClick: function (e) {
        this.props.hideModal(this.props.modalKey);
    },
    
    handleContentClick: function (e) {
        e.stopPropagation();
    },
    
    componentDidMount: function (v1, v2 , v3) {
        this.adjustContentDivPosition();
    },
    
    componentDidUpdate:function (v1, v2 , v3) {
        this.adjustContentDivPosition();
    },
    
    adjustContentDivPosition: function () {
        if(this.props.isShow) {
            var node = this.refs.wholePageModalContentDiv;
            var top = (node.parentNode.clientHeight - node.clientHeight) / 2;
            var left = (node.parentNode.clientWidth - node.clientWidth) / 2;
            node.style.top = top + "px";
            node.style.left = left + "px";            
        }
    },
    
    render: function(){
        var modalInlineStyle = {};
        if(this.props.isShow) {
            modalInlineStyle.display = "initial";
        }
        else {
            modalInlineStyle.display = "none";
        }
                
        return (
            <div className="whole-page-modal" onClick={this.handleClick} style={modalInlineStyle} >
                <div className="whole-page-modal-content" ref="wholePageModalContentDiv" onClick={this.handleContentClick}>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = WholePageModal;