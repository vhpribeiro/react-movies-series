import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const appReducer = combineReducers({
    movies: searchReducer
});
  
export default appReducer;