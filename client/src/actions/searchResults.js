export const ADD_LIST_RESULTS = 'ADD_LIST_RESULTS';
export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';
export const RESET_LIST = 'RESET_LIST';

const fetchTvSeries = async ({ value }) => {
  const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`, {
    method: 'GET'
  });
  const json = await resp.json();
  return json;
};

const fetchOneTvSeries = async value => {
  console.log(value);
  const resp = await fetch(`http://api.tvmaze.com/shows/${value}`, {
    method: 'GET'
  });
  const json = await resp.json();
  return json;
};

export const getListOfTvSeries = value => async (dispatch, state) => {
  // console.log(state().activeType);
  const list = await fetchTvSeries(value);
  dispatch(addListResults(list));
};

export const getOneTvSeries = value => async (dispatch, state) => {
  console.log(value);
  // console.log(state().activeType);
  const details = await fetchOneTvSeries(value);
  dispatch(addDetailsOfOne(details));
  console.log(details);
};

export const addListResults = item => ({
  type: ADD_LIST_RESULTS,
  item
});

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item
});

export const resetList = item => ({
  type: RESET_LIST,
  item
});
