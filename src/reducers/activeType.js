import { CHANGE_ACTIVE_TYPE } from '../actions/activeTyp';

const INITIAL_STATE = {
  name: 'series',
  index: 3
};

const activeTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_TYPE:
      return {
        ...state,
        index: action.item
      };

    default:
      return state;
  }
};

export default activeTypeReducer;
