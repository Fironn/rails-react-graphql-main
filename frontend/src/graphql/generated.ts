import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
};

export type Todo = {
  __typename?: "Todo";
  createdAt: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["ISO8601DateTime"];
};

export type TodoAttributes = {
  title: Scalars["String"];
};

export type CreateTodoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  params: TodoAttributes;
};

export type CreateTodoPayload = {
  __typename?: "CreateTodoPayload";
  todo: Todo;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteTodoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type DeleteTodoPayload = {
  __typename?: "DeleteTodoPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo?: Maybe<CreateTodoPayload>;
  deleteTodo?: Maybe<DeleteTodoPayload>;
  /** An example field added by the generator */
  testField: Scalars["String"];
  updateTodo?: Maybe<UpdateTodoPayload>;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: "Query";
  todo: Todo;
  todos: Array<Todo>;
  /** An example field added by the generator */
  testField: Scalars["String"];
};

export type QueryTodoArgs = {
  id: Scalars["ID"];
};

export type UpdateTodoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  params: TodoAttributes;
};

export type UpdateTodoPayload = {
  __typename?: "UpdateTodoPayload";
  todo: Todo;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type CreateTodoMutationVariables = Exact<{
  params: TodoAttributes;
}>;

export type CreateTodoMutation = {
  __typename?: "Mutation";
  createTodo?: {
    __typename?: "CreateTodoPayload";
    Todo: { __typename?: "Todo"; id: string; title?: string | null };
  } | null;
};

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteTodoMutation = {
  __typename?: "Mutation";
  deleteTodo?: { __typename?: "DeleteTodoPayload"; id: string } | null;
};

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars["ID"];
  params: TodoAttributes;
}>;

export type UpdateTodoMutation = {
  __typename?: "Mutation";
  updateTodo?: {
    __typename?: "UpdateTodoPayload";
    todo: { __typename?: "Todo"; id: string; title?: string | null };
  } | null;
};

export type TodosQueryVariables = Exact<{ [key: string]: never }>;

export type TodosQuery = {
  __typename?: "Query";
  todos: Array<{
    __typename?: "Todo";
    id: string;
    title?: string | null;
    updatedAt?: any | null;
  }>;
};

export const CreateTodoDocument = gql`
  mutation createTodo($params: TodoAttributes!) {
    createTodo(input: { params: $params }) {
      todo {
        id
        title
      }
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;

export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument,
    options
  );
}
export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(input: { id: $id }) {
      id
    }
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;

export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    options
  );
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;
export const UpdateTodoDocument = gql`
  mutation updateTodo($id: ID!, $params: TodoAttributes!) {
    updateTodo(input: { id: $id, params: $params }) {
      todo {
        id
        title
      }
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;

export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    UpdateTodoDocument,
    options
  );
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;
export const TodosDocument = gql`
  query todos {
    todos {
      id
      title
      updatedAt
    }
  }
`;

export function useTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options
  );
}
export function useTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options
  );
}
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<
  TodosQuery,
  TodosQueryVariables
>;
