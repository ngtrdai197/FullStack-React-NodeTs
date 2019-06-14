import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { allReducers } from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(allReducers, applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
