import React, {Component} from 'react';
import {render} from 'react-dom';
import Sub from 'es6!./subjsx';

class App extends Component {
    render() {
        return (
            <div>Hello App
                <Sub/>
            </div>
        );
    }
}

export default App;