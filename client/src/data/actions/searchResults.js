import { fetchOneBooks } from '../fetch/books.fetch';
import { fetchOneTvSeries } from '../fetch/tvSeries.fetch';
import { fetchOneMovie } from '../fetch/movies.fetch';
import { fetchOneMusic } from '../fetch/music.fetch';

export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';
export const RESET_LIST = 'RESET_LIST';

//TVSERIES ------------------------------------------------

export const getOneTvSeries = value => async dispatch => {
  const details = await fetchOneTvSeries(value);
  console.log(details);
  const tvseries = {
    image: details.image?.medium,
    rating: details.rating?.average,
    name: details.name,
    officialSite: details.url,
    premiered: details.premiered,
  };
  dispatch(addDetailsOfOne(tvseries));
};

//BOOKS ------------------------------------------------

export const getOneBook = value => async dispatch => {
  console.log(value);
  const { volumeInfo } = await fetchOneBooks(value);
  console.log(volumeInfo);

  const book = {
    image: volumeInfo.imageLinks?.thumbnail,
    rating: volumeInfo.averageRating,
    name: volumeInfo.title,
    officialSite: volumeInfo.infoLink,
    premiered: volumeInfo.publishedDate,
  };

  dispatch(addDetailsOfOne(book));
};

//FILMS ------------------------------------------------

export const getOneMovie = value => async dispatch => {
  const details = await fetchOneMovie(value);
  console.log(details);

  dispatch(addDetailsOfOne(details));
};

// MUSIC ----------------------------------------------

export const getOneMusic = value => async dispatch => {
  const details = await fetchOneMusic(value);
  console.log(details);

  dispatch(addDetailsOfOne(details));
};

//------------------------------------------------------

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item,
});

export const resetList = item => ({
  type: RESET_LIST,
  item,
});
