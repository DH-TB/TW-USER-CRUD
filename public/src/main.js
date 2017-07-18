import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Add from './components/add';

ReactDom.render(
    <Provider>
        <Add/>
    </Provider>, document.getElementById('app'));
