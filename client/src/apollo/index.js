import { gql } from 'apollo-boost';

export const FIND_ALL_GAMES_QUERY = gql`
  {
    findGameByName(name: "assassins") {
      id
      name
    }
  }
`;
