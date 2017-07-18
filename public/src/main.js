import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AddUser from './containers/AddUser';
import reducer from './reducers/index.js';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <AddUser/>
    </Provider>, document.getElementById('app'));
