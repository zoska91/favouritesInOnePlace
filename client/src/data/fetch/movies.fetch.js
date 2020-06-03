import { apiKeys } from '../../config/api-keys';
import { useQuery } from 'react-query';

export const fetchMovies = async (key, value) => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKeys.movies}&query=${value}`,
    {
      method: 'GET',
    }
  );
  const json = await resp.json();
  return json.results;
};

export const fetchOneMovie = async value => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${value}?api_key=${apiKeys.movies}`,
    {
      method: 'GET',
    }
  );
  const details = await resp.json();

  const movie = {
    id: value,
    image:
      details.poster_path &&
      `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
    rating: details.vote_average || null,
    name: details.title,
    officialSite: details.homepage,
    premiered: details.release_date,
  };

  return movie;
};

const useMoviesList = value => {
  return useQuery(['moviesList', { value }], fetchMovies, { manual: true });
};

export default useMoviesList;
