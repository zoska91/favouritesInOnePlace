import { combineReducers } from 'redux';
import activeTypeReducer from '../reducers/activeType';

const rootReducer = combineReducers({
  activeType: activeTypeReducer
});

export default rootReducer;
