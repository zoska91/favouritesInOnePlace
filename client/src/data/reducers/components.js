import { TOGGLE_SEARCH_LIST } from '../actions/components';

const INITIAL_STATE = {
  searchListVisible: false,
};

const componentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_LIST:
      return {
        ...state,
        searchListVisible: action.item,
      };

    default:
      return state;
  }
};

export default componentsReducer;
