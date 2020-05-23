import { fetchBooks } from '../fetch/books.fetch';
import { fetchTvSeries, fetchOneTvSeries } from '../fetch/tvSeries.fetch';
import { fetchMovies, fetchOneMovie } from '../fetch/movies.fetch';
import { fetchMusics, fetchOneMusic } from '../fetch/music.fetch';

export const ADD_LIST_RESULTS = 'ADD_LIST_RESULTS';
export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';
export const RESET_LIST = 'RESET_LIST';

//TVSERIES ------------------------------------------------

export const getOneTvSeries = value => async dispatch => {
  const details = await fetchOneTvSeries(value);
  dispatch(addDetailsOfOne(details));
};

//BOOKS ------------------------------------------------

export const getListOfBooks = value => async dispatch => {
  const list = await fetchBooks(value);
  dispatch(addListResults(list));
};

export const getOneBook = value => async dispatch => {
  const details = await fetchBooks(value);
  dispatch(addDetailsOfOne(details));
};

//FILMS ------------------------------------------------

export const getListOfMovies = value => async dispatch => {
  const list = await fetchMovies(value);
  dispatch(addListResults(list));
};

export const getOneMovie = value => async dispatch => {
  const details = await fetchOneMovie(value);
  dispatch(addDetailsOfOne(details));
};

// MUSIC ----------------------------------------------

export const getListOfMusics = value => async dispatch => {
  const list = await fetchMusics(value);
  dispatch(addListResults(list.trackmatches.track));
};

export const getOneMusic = value => async dispatch => {
  const details = await fetchOneMusic(value);
  dispatch(addDetailsOfOne(details));
};

//------------------------------------------------------

export const addListResults = item => ({
  type: ADD_LIST_RESULTS,
  item,
});

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item,
});

export const resetList = item => ({
  type: RESET_LIST,
  item,
});
