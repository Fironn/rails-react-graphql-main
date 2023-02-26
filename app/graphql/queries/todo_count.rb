module Queries
    class TodoCount < Queries::BaseQuery
  
      type Integer, null: false
  
      def resolve()
        ::Todo.count
      end
    end
  end