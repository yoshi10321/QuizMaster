FactoryGirl.define do
  factory :question do
    content { Faker::StarWars.character }
    answer { Faker::StarWars.character }
  end
end
