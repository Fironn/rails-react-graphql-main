module Queries
  class Todo < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Todo, null: false

    def resolve(id:)
      ::Todo.find(id)
    end
  end
end