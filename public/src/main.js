import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import  thunkMiddleware from 'redux-thunk';

import AddUser from './containers/AddUser';

import reducer from './reducers/index.js';

import findUser from './middlewares/FindUser';

const middleWare = applyMiddleware(thunkMiddleware,findUser);
const store = createStore(reducer,middleWare);

ReactDom.render(
    <Provider store={store}>
        <AddUser/>
    </Provider>, document.getElementById('app'));
