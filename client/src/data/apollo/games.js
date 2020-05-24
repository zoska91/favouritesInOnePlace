import { gql } from 'apollo-boost';

export const FIND_ALL_GAMES_QUERY = gql`
  query games($name: String!) {
    findGameByName(name: $name) {
      id
      name
      url
      rating
      cover {
        url
      }
    }
  }
`;

export const FIND_ONE_GAME = gql`
  query oneGame($id: Int!) {
    findGameById(id: $id) {
      name
      id
      url
      rating
      summary
      first_release_date
      cover {
        url
      }
    }
  }
`;
