FactoryGirl.define do
  factory :question do
    content { Faker::StarWars.character }
    answer { Faker::StarWars.character }
  end

  factory :number do
    content { Faker::StarWars.character }
    answer { 1 }
  end

  factory :text do
    content { Faker::StarWars.character }
    answer { "one" }
  end
end
