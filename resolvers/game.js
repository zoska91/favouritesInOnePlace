import axios from 'axios';
import { apiKeys } from '../config/api-keys';

export default {
  Query: {
    findGameByName: async (parent, { name }) => {
      const resp = await axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': apiKeys.games,
          api_header: {
            header: 'Access-Control-Allow-Origin',
            value: '*'
          }
        },

        data: ` fields name, id, cover, rating, summary, url; search "${name}";`
      });
      console.log(resp.data);

      const data = resp.data.map(async el => {
        if (el.cover) {
          const cover = await axios({
            url: 'https://api-v3.igdb.com/covers',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'user-key': apiKeys.games,
              api_header: {
                header: 'Access-Contro,l-Allow-Origin',
                value: '*'
              }
            },

            data: `fields image_id, url, game; where id = ${el.cover};`
          });

          const data = {
            name: el.name,
            id: el.id,
            url: el.url,
            summary: el.summary,
            rating: el.rating,
            cover: cover.data
          };
          console.log(data);
          return data;
        } else {
          return el;
        }
      });
      return data;
    },

    findGameById: async (parent, { id }) => {
      const resp = await axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': apiKeys.games,
          api_header: {
            header: 'Access-Control-Allow-Origin',
            value: '*'
          }
        },

        data: `fields *; where id = ${id};`
      });
      console.log(resp.data);

      const data = resp.data.map(async el => {
        if (el.cover) {
          const cover = await axios({
            url: 'https://api-v3.igdb.com/covers',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'user-key': apiKeys.games,
              api_header: {
                header: 'Access-Contro,l-Allow-Origin',
                value: '*'
              }
            },

            data: `fields image_id, url, game; where id = ${el.cover};`
          });

          const data = {
            name: el.name,
            id: el.id,
            url: el.url,
            summary: el.summary,
            rating: el.rating,
            cover: cover.data,
            first_release_date: el.first_release_date
          };
          console.log(data);
          return data;
        } else {
          return el;
        }
      });
      return data;
    }
  }
};

// TODO - less code - 2 func in one
