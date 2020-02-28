import { combineReducers } from 'redux';
import activeTypeReducer from '../reducers/activeType';
import searchResultsReducer from '../reducers/searchResults';
import userReducer from './user';

const rootReducer = combineReducers({
  activeType: activeTypeReducer,
  searchResults: searchResultsReducer,
  user: userReducer
});

export default rootReducer;
