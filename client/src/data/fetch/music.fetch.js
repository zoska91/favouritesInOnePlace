import { apiKeys } from '../../config/api-keys';

export const fetchMusics = async (key, value) => {
  const resp = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=${apiKeys.music}&format=json`,

    {
      method: 'GET',
    }
  );

  const json = await resp.json();
  return json.results.trackmatches.track;
};

export const fetchOneMusic = async value => {
  const resp = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKeys.music}&mbid=${value}&format=json`,
    {
      method: 'GET',
    }
  );
  const json = await resp.json();
  return json;
};
