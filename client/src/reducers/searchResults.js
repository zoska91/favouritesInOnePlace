import { ADD_LIST_RESULTS } from '../actions/searchResults';
import { ADD_DETAILS_OF_ONE } from '../actions/searchResults';
import { RESET_LIST } from '../actions/searchResults';

const INITIAL_STATE = {
  list: [],
  detailsOfOne: []
};

const searchResultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST_RESULTS:
      return {
        ...state,
        list: action.item
      };

    case ADD_DETAILS_OF_ONE:
      return {
        ...state,
        detailsOfOne: action.item
      };

    case RESET_LIST:
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};

export default searchResultsReducer;
