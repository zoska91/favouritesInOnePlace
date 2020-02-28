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
