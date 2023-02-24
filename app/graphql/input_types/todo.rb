class InputTypes::Todo < Types::BaseInputObject
  graphql_name 'TodoAttributes' 

  argument :title, String, required: true
end