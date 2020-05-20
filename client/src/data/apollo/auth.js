import { gql } from 'apollo-boost';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        email
        firstName
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation singup($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      email
    }
  }
`;
