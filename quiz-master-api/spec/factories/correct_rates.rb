FactoryGirl.define do
  factory :correct_rate do
    correct_count { 10 }
    incorrect_count { 5 }
    correct_rate { 67 }
    question_id { question_id }
  end
end
