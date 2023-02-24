module Queries
    class Todos < Queries::BaseQuery
  
      type [ObjectTypes::Todo], null: false
  
      def resolve
        ::Todo.all.order(:id)
      end
    end
end