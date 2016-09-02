/**
 * Created by yueych on 9/2/2016.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import Sub from 'es6!./subjsx';

class App extends Component {
    constructor(props){
        super(props);
        console.info(this.props.data);
        // (this.props.action())();
        this.state = {
            data: this.props.data,
            action : this.props.action
        };
        this.handlerClick = this.handlerClick.bind(this);
    };

    handlerClick(e){
      console.info("handlerClick");
        this.state.action();

    };
    render() {
        return (
            <div onClick={this.handlerClick}>Hello Button
                <Sub/>
            </div>
        );
    }
}

export default App;