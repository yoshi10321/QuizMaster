require 'rails_helper'

RSpec.describe CorrectRate, type: :model do
  it { should validate_presence_of(:correct_count) }
  it { should validate_presence_of(:incorrect_count) }
  it { should validate_presence_of(:correct_rate) }

  describe 'CorrectRate update_by_answer_result' do
    before { 
      @correct_rate = CorrectRate.new(
        correct_count: 10,
        incorrect_count: 5,
        correct_rate: 67,
        question_id: 3
        )}

    context 'when the answer is correct' do
      it 'returns calcurated rate' do
        @correct_rate.update_by_answer_result('correct')
        expect(@correct_rate.correct_count).to eq(11)
        expect(@correct_rate.correct_rate).to eq(68)
      end
    end
    
    context 'when the answer is incorrect' do
      it 'returns calcurated rate' do
        @correct_rate.update_by_answer_result('incorrect')
        expect(@correct_rate.incorrect_count).to eq(6)
        expect(@correct_rate.correct_rate).to eq(62)
      end
    end
  end
end
