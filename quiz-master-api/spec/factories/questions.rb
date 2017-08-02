FactoryGirl.define do
  factory :question do
    content { Faker::StarWars.character }
    answer { Faker::StarWars.character }
  end

  factory :answerNumber, class: Question do
    content { Faker::StarWars.character }
    answer { 1 }
  end
end
