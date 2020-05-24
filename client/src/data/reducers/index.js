import { combineReducers } from 'redux';
import activeTypeReducer from './activeType';
import searchResultsReducer from './searchResults';
import userReducer from './user';
import componentsReducer from './components';

const rootReducer = combineReducers({
  activeType: activeTypeReducer,
  searchResults: searchResultsReducer,
  user: userReducer,
  components: componentsReducer,
});

export default rootReducer;
