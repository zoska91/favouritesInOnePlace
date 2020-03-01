import { gql } from 'apollo-boost';

export const GET_USER_INFO = gql`
  query userInfo {
    me {
      id
      firstName
      email
      lastName
    }
  }
`;
