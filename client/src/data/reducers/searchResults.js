import { ADD_DETAILS_OF_ONE } from '../actions/searchResults';

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

    default:
      return state;
  }
};

export default searchResultsReducer;
