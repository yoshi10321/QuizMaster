require 'rails_helper'

RSpec.describe CorrectRate, type: :model do
  it { should validate_presence_of(:correct_count) }
  it { should validate_presence_of(:incorrect_count) }
  it { should validate_presence_of(:correct_rate) }
end
