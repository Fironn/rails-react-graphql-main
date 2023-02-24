import { gql } from "@apollo/client";

export default gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(input: { id: $id }) {
      id
    }
  }
`;
