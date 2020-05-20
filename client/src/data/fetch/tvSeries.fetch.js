export const fetchTvSeries = async ({ value }) => {
  const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${value}`, {
    method: 'GET',
  });
  const json = await resp.json();
  return json;
};

export const fetchOneTvSeries = async value => {
  console.log(value);
  const resp = await fetch(`http://api.tvmaze.com/shows/${value}`, {
    method: 'GET',
  });
  const json = await resp.json();
  return json;
};
