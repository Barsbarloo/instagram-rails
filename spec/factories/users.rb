FactoryBot.define do
  factory :user do
    username { Faker::Inernet.unique.username }
  end
end
