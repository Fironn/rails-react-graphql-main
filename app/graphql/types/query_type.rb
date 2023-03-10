module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :todos, resolver: Queries::Todos
    field :todo, resolver: Queries::Todo
    field :todo_count, resolver: Queries::TodoCount
  end
end
