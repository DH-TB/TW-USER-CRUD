import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import  thunkMiddleware from 'redux-thunk';

import UserCenter from './containers/UserCenter';

import reducer from './reducers/index.js';

import findUser from './middlewares/FindUser';
import deleteUser from './middlewares/DeleteUser';
import addUser from './middlewares/AddUser';

const middleWare = applyMiddleware(thunkMiddleware,findUser,deleteUser,addUser);
const store = createStore(reducer,middleWare);

ReactDom.render(
    <Provider store={store}>
        <UserCenter/>
    </Provider>, document.getElementById('app'));
