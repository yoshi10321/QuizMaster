require 'rails_helper'

RSpec.describe Question, type: :model do
  it { should validate_presence_of(:content) }
  it { should validate_presence_of(:answer) }
end
