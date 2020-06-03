import { fetchOneBooks } from '../fetch/books.fetch';
import { fetchOneTvSeries } from '../fetch/tvSeries.fetch';
import { fetchOneMovie } from '../fetch/movies.fetch';
import { fetchOneMusic } from '../fetch/music.fetch';

export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';
export const RESET_LIST = 'RESET_LIST';

//TVSERIES ------------------------------------------------

export const getOneTvSeries = value => async dispatch => {
  const data = await fetchOneTvSeries(value);
  console.log(data);

  dispatch(addDetailsOfOne(data));
};

//BOOKS ------------------------------------------------

export const getOneBook = value => async (dispatch, state) => {
  const data = await fetchOneBooks(value);
  dispatch(addDetailsOfOne(data));
};

//MOVIES ------------------------------------------------

export const getOneMovie = value => async dispatch => {
  const data = await fetchOneMovie(value);
  dispatch(addDetailsOfOne(data));
};

// MUSIC ----------------------------------------------

export const getOneMusic = value => async dispatch => {
  const data = await fetchOneMusic(value);
  dispatch(addDetailsOfOne(data));
};

//------------------------------------------------------

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item,
});
