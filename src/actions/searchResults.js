export const ADD_LIST_RESULTS = 'ADD_LIST_RESULTS';
export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';

export const addListResults = item => ({
  type: ADD_LIST_RESULTS,
  item
});

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item
});
