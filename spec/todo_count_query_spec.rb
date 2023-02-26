require 'rails_helper'

RSpec.describe "todoCount query", type: :request do
    describe "todoCount" do
        let!(:todos) { 
            Todo.create()
            Todo.create()
            Todo.create()
        }
  
        let(:query) do
            <<~GQL
            query {
                todoCount
            }
            GQL
        end
    
        it "returns the number of todo" do
            post '/graphql', params: { query: query }
            json = JSON.parse(response.body)
            data = json['data']['todoCount']
    
            expect(data).to eq(3)
        end
    end
  end
  