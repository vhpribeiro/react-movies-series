import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => {
    const middleware = [thunk];
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}

export default configureStore;