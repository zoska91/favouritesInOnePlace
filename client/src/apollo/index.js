import { gql } from 'apollo-boost';

// export const FIND_ALL_GAMES_QUERY = gql`
//   {
//     findGameByName(name: "assassins") {
//       id
//       name
//     }
//   }
// `;

export const FIND_ALL_GAMES_QUERY = gql`
  query games($name: String!) {
    findGameByName(name: $name) {
      id
      name
    }
  }
`;
