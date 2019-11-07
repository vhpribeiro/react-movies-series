import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { Home } from './templates';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';
import initialState from './reducers/initialState'

const store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    , rootElement
);

serviceWorker.unregister();
