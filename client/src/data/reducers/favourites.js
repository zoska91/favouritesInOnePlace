import { SET_FAVOURITES } from '../actions/favourites';

const INITIAL_STATE = {};

const favouritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FAVOURITES:
      return {
        ...state,
        ...action.item,
      };

    default:
      return state;
  }
};

export default favouritesReducer;
