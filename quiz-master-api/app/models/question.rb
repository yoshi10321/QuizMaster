class Question < ApplicationRecord
  has_one :correct_rate, dependent: :destroy

  validates_presence_of :content, :answer
end
