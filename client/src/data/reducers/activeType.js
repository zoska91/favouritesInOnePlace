import { CHANGE_ACTIVE_TYPE, SET_NAME_TYPE } from '../actions/activeTyp';

const INITIAL_STATE = {
  name: 'books',
  index: 2,
};

const activeTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_TYPE:
      return {
        ...state,
        index: action.item,
      };
    case SET_NAME_TYPE:
      return {
        ...state,
        name: action.item,
      };

    default:
      return state;
  }
};

export default activeTypeReducer;
