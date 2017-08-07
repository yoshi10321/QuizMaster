class CorrectRate < ApplicationRecord
  belongs_to :question
  after_initialize :set_default

  validates_presence_of :correct_count, :incorrect_count, :correct_rate

  private
  def set_default
    self.correct_count ||= 0
    self.incorrect_count ||= 0
    self.correct_rate ||= 0
  end
end
