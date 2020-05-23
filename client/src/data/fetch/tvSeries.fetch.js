import { useQuery } from 'react-query';

const fetchTvSeries = async (key, { value }) => {
  const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`, {
    method: 'GET',
  });
  const json = await resp.json();
  return json;
};

export const fetchOneTvSeries = async value => {
  const resp = await fetch(`http://api.tvmaze.com/shows/${value}`, {
    method: 'GET',
  });
  const json = await resp.json();
  return json;
};

const useTvseriesList = value => {
  return useQuery(['tvseriesList', { value }], fetchTvSeries, { manual: true });
};

export default useTvseriesList;
