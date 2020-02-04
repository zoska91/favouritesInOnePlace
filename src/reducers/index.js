import { combineReducers } from 'redux';
import activeTypeReducer from '../reducers/activeType';
import searchResultsReducer from '../reducers/searchResults';

const rootReducer = combineReducers({
  activeType: activeTypeReducer,
  searchResults: searchResultsReducer
});

export default rootReducer;
