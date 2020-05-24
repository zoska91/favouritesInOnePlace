import { ADD_DETAILS_OF_ONE, RESET_LIST } from '../actions/searchResults';

const INITIAL_STATE = {
  detailsOfOne: [],
};

const searchResultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DETAILS_OF_ONE:
      return {
        ...state,
        detailsOfOne: action.item,
      };

    case RESET_LIST:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default searchResultsReducer;
