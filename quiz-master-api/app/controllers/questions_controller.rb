class QuestionsController < ApplicationController
  def new
  end

  def create
    @question = Question.new(params[:content], params[:answer])
    @question.content = params[:content]
    @question.answer = arams[:answer]
    

  end
end
