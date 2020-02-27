import axios from 'axios';

export default {
  Query: {
    findGameByName: async (parent, { name }) => {
      const resp = await axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': '8c2d330977e65e76841713ebe6fa7751',
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
              'user-key': '8c2d330977e65e76841713ebe6fa7751',
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
    }
  }
};
