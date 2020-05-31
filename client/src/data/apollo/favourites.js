import { gql } from 'apollo-boost';

export const CREATE_FAVOURITE = gql`
  mutation createData($text: String, $groupId: Int!, $link: String) {
    createData(text: $text, groupId: $groupId, link: $link) {
      id
    }
  }
`;
