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
  const json = await resp.json();
  return json;
};

const useMoviesList = value => {
  return useQuery(['moviesList', { value }], fetchMovies, { manual: true });
};

export default useMoviesList;
