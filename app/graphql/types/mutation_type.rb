module Types
  class MutationType < Types::BaseObject
    field :create_todo, mutation: Mutations::CreateTodo, description: 'Todo新規追加'
    field :update_todo, mutation: Mutations::UpdateTodo, description: 'Todo更新'
    field :delete_todo, mutation: Mutations::DeleteTodo, description: 'Todo削除'
  end
end
