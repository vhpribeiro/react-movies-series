import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './index.css';
import { Home, Movie } from './templates';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';
import initialState from './reducers/initialState'

const store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movies/:id" component={Movie}/>
        </Router>
    </Provider>
    , rootElement
);

serviceWorker.unregister();
