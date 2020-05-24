import { fetchOneBooks } from '../fetch/books.fetch';
import { fetchOneTvSeries } from '../fetch/tvSeries.fetch';
import { fetchOneMovie } from '../fetch/movies.fetch';
import { fetchOneMusic } from '../fetch/music.fetch';

export const ADD_DETAILS_OF_ONE = 'ADD_DETAILS_OF_ONE';
export const RESET_LIST = 'RESET_LIST';

//TVSERIES ------------------------------------------------

export const getOneTvSeries = value => async dispatch => {
  const details = await fetchOneTvSeries(value);

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
  const { volumeInfo } = await fetchOneBooks(value);

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

  const movie = {
    image:
      details.poster_path &&
      `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
    rating: details.vote_average,
    name: details.title,
    officialSite: details.homepage,
    premiered: details.release_date,
  };

  dispatch(addDetailsOfOne(movie));
};

// MUSIC ----------------------------------------------

export const getOneMusic = value => async dispatch => {
  const { track } = await fetchOneMusic(value);

  const movie = {
    image: Object.values(track?.album?.image[3])[0],
    rating: track.vote_average,
    name: `${track.name} - ${track.artist.name}`,
    officialSite: track.url,
    premiered: track.wiki?.published,
  };

  dispatch(addDetailsOfOne(movie));
};

//------------------------------------------------------

export const addDetailsOfOne = item => ({
  type: ADD_DETAILS_OF_ONE,
  item,
});
