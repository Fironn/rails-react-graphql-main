
module Mutations
  class CreateTodo < Mutations::BaseMutation
    argument :params, InputTypes::Todo, required: true
    #argument :title, String, required: true, validates: { format: { with: /\A([a-zA-Z0-9]+)([a-zA-Z0-9\._\-\+]*)@([a-zA-Z0-9]+)([a-zA-Z0-9\._\-]+)\z/ } }

    field :todo, ObjectTypes::Todo, null: false
 
    def resolve(params:)
      #validate_input!
      todo = Todo.create!(params.to_h)
 
      { todo: todo }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end

    #def validate_input!
    #  return if context.errors.empty?
    #  
    #  # To avoid duplicated error
    #  last_error = context.errors.pop
    #  raise last_error
    #end
  
  end
end