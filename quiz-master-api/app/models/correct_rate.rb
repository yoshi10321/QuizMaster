class CorrectRate < ApplicationRecord
  belongs_to :question
  after_initialize :set_default

  validates_presence_of :correct_count, :incorrect_count, :correct_rate

  def update_by_answer_result(result)
    if result == 'correct'
      self.correct_count = self.correct_count + 1
    else
      self.incorrect_count = self.incorrect_count + 1
    end

    @rate = (self.correct_count.to_f / (self.correct_count + self.incorrect_count).to_f) * 100

    self.update_attributes(
      correct_count: self.correct_count,
      incorrect_count: self.incorrect_count,
      correct_rate: @rate
    )
  end

  private
  def set_default
    self.correct_count ||= 0
    self.incorrect_count ||= 0
    self.correct_rate ||= 0
  end
end
