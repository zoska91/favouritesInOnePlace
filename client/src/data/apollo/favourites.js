import { gql } from 'apollo-boost';

export const CREATE_FAVOURITE = gql`
  mutation createData(
    $text: String
    $groupId: Int!
    $link: String
    $img: String
    $title: String
  ) {
    createData(
      text: $text
      groupId: $groupId
      link: $link
      Img: $img
      title: $title
    ) {
      id
    }
  }
`;

export const GET_ALL_DATA = gql`
  query allData {
    allData {
      id
      text
      link
      groupId
      Img
      title
    }
  }
`;
