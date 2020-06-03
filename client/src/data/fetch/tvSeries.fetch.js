export const fetchTvSeries = async (key, value) => {
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
  const details = await resp.json();

  const tvseries = {
    id: details.id,
    image: details.image?.medium,
    rating: details.rating?.average,
    name: details.name,
    officialSite: details.url,
    premiered: details.premiered,
  };

  return tvseries;
};
