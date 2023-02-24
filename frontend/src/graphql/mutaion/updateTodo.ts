import { gql } from "@apollo/client";

export default gql`
  mutation updateTodo($id: ID!, $params: TodoAttributes!) {
    updateTodo(input: { id: $id, params: $params }) {
      todo {
        id
        title
      }
    }
  }
`;
