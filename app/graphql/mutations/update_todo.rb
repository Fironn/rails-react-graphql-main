module Mutations
  class UpdateTodo < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :params, InputTypes::Todo, required: true

    field :todo, ObjectTypes::Todo, null: false

    def resolve(id:, params:)
      todo = Todo.find(id)
      todo.update!(params.to_h)

      { todo: todo }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end