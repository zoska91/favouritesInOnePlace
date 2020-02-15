import axios from 'axios';

export default {
  Query: {
    findGameByName: async (parent, { name }) => {
      const resp = await axios({
        url: 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': '8c2d330977e65e76841713ebe6fa7751'
        },
        data: `search "${name}"; fields name, id; `
      });
      return resp.data;
    }
  }
};
