import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { allReducers } from './store/reducers';
import { createStore } from 'redux';
const store = createStore(allReducers);



ReactDOM.render(
    <Provider store={store}><
        App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
