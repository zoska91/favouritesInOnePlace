import { combineReducers } from 'redux';
import activeTypeReducer from './activeType';
import searchResultsReducer from './searchResults';
import userReducer from './user';

const rootReducer = combineReducers({
  activeType: activeTypeReducer,
  searchResults: searchResultsReducer,
  user: userReducer
});

export default rootReducer;
