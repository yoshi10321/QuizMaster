require 'rails_helper'

RSpec.describe 'Questions API', type: :request do

  let!(:questions) { create_list(:question, 10) }
  let(:question_id) { questions.first.id }

  # GET /questions
  describe 'GET /questions' do
    before { get '/questions' }

    it 'returns questions' do
      expect(JSON.parse(response.body)).not_to be_empty
      expect(JSON.parse(response.body).size).to eq(10)
    end
    
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
  
  # GET /questions/:id
  describe 'GET /questions/:id' do
    before { get "/questions/#{question_id}" }

    context 'when the record exists' do
      it 'returns one question' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['id']).to eq(question_id)
      end
    
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:question_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
      
      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Question/)
      end
    end
  end

  # POST /questions
  describe 'POST /questions' do
    let(:valid_attributes) { { content: 'What is the name of capital in Japan?', answer: 'Tokyo' } }

    context 'when the request is valid' do
      before { post '/questions', params: valid_attributes }

      it 'creates a question' do
        expect(JSON.parse(response.body)['content']).to eq('What is the name of capital in Japan?')
      end
      
      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/questions', params: { content: 'Foobar' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body).to match(/Validation failed: Answer can't be blank/)
      end
    end
  end

  # PUT /questions/:id
  describe 'PUT /questions/:id' do
    let(:valid_attributes) { { content: 'test question' } }

    context 'when the record exists' do
      before { put "/questions/#{question_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end
      
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # DELETE /questions/:id
  describe 'DELETE /questions/:id' do
    before { delete "/questions/#{question_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  # POST /questions/:id/answer
  describe 'POST /questions/:id/answer' do
    context 'when the param is correct number' do
      before { post "/questions/#{question_id}/answer", params: { answer: 1 } }

      it 'returns correct' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['status']).to eq('correct')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the param is correct text' do
      before { post "/questions/#{question_id}/answer", params: { answer: 'one' } }

      it 'returns correct' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['status']).to eq('correct')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the param is wrong number' do
      before { post "/questions/#{question_id}/answer", params: { answer: 2 } }

      it 'returns correct' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['status']).to eq('correct')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the param is wrong text' do
      before { post "/questions/#{question_id}/answer", params: { answer: 'two' } }

      it 'returns correct' do
        expect(JSON.parse(response.body)).not_to be_empty
        expect(JSON.parse(response.body)['status']).to eq('incorrect')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

end
