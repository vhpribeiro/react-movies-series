import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const appReducer = combineReducers({
    movies: searchReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') state = undefined;
  
    return appReducer(state, action);
  };
  
export default rootReducer;