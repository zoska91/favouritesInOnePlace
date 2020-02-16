import { fetchTvSeries, fetchOneTvSeries } from '../searchAPIs/tvSeries';

export const ADD_LIST_RESULTS = 'ADD_LIST_RESULTS';
export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';

//tv series
export const getListOfTvSeries = value => async dispatch => {
  const list = await fetchTvSeries(value);
  dispatch(addListResults(list));
};

export const getOneTvSeries = value => async dispatch => {
  const details = await fetchOneTvSeries(value);
  dispatch(addDetailsOfOne(details));
};

export const addListResults = item => ({
  type: ADD_LIST_RESULTS,
  item
});

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item
});
