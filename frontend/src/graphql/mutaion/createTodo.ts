import { gql } from "@apollo/client";

export default gql`
  mutation createTodo($params: TodoAttributes!) {
    createTodo(input: { params: $params }) {
      todo {
        id
        title
      }
    }
  }
`;
