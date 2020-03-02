import { apiKeys } from '../config/api-keys';

export const ADD_LIST_RESULTS = 'ADD_LIST_RESULTS';
export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';
export const RESET_LIST = 'RESET_LIST';

//TVSERUIES ------------------------------------------------
const fetchTvSeries = async ({ value }) => {
  const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`, {
    method: 'GET'
  });
  const json = await resp.json();
  return json;
};

export const getListOfTvSeries = value => async (dispatch, state) => {
  const list = await fetchTvSeries(value);
  dispatch(addListResults(list));
};

const fetchOneTvSeries = async value => {
  console.log(value);
  const resp = await fetch(`http://api.tvmaze.com/shows/${value}`, {
    method: 'GET'
  });
  const json = await resp.json();
  return json;
};

export const getOneTvSeries = value => async (dispatch, state) => {
  console.log(value);
  const details = await fetchOneTvSeries(value);
  dispatch(addDetailsOfOne(details));
  console.log(details);
};

//BOOKS ------------------------------------------------
const fetchBooks = async ({ value }) => {
  console.log(value);
  const resp = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${value}`,
    {
      method: 'GET'
    }
  );
  const json = await resp.json();
  console.log(json);
  return json;
};

export const getListOfBooks = value => async (dispatch, state) => {
  const list = await fetchBooks(value);
  dispatch(addListResults(list));
};

export const getOneBook = value => async (dispatch, state) => {
  console.log(value);
  const details = await fetchBooks(value);
  dispatch(addDetailsOfOne(details));
  console.log(details);
};

//FILMS ------------------------------------------------

const fetchMovies = async ({ value }) => {
  console.log(value);
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKeys.movies}&query=${value}`,
    {
      method: 'GET'
    }
  );
  const json = await resp.json();
  console.log(json.results);
  return json.results;
};

export const getListOfMovies = value => async (dispatch, state) => {
  const list = await fetchMovies(value);
  dispatch(addListResults(list));
};

const fetchOneMovie = async value => {
  console.log(value);
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${value}?api_key=${apiKeys.movies}&language=en-US`,
    {
      method: 'GET'
    }
  );
  const json = await resp.json();
  return json;
};

export const getOneMovie = value => async (dispatch, state) => {
  console.log(value);
  const details = await fetchOneMovie(value);
  dispatch(addDetailsOfOne(details));
  console.log(details);
};

//------------------------------------------------------

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
