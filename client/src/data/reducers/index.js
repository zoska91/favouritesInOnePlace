import { combineReducers } from 'redux';
import activeTypeReducer from './activeType';
import searchResultsReducer from './searchResults';
import userReducer from './user';
import componentsReducer from './components';
import favouritesReducer from './favourites';

const rootReducer = combineReducers({
  activeType: activeTypeReducer,
  searchResults: searchResultsReducer,
  user: userReducer,
  components: componentsReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
