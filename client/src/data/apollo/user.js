import { gql } from 'apollo-boost';

export const GET_USER_INFO = gql`
  query userInfo {
    me {
      id
      lastName
      firstName
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: Int!
    $lastName: String
    $firstName: String
    $email: String
    $password: String
  ) {
    updateUser(
      id: $id
      lastName: $lastName
      firstName: $firstName
      email: $email
      password: $password
    )
  }
`;
