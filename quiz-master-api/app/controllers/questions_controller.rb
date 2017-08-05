class QuestionsController < ApplicationController
  include Answer

  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    @questions = Question.all
    json_response(@questions)
  end
  
  # POST /questions
  def create
    @question = Question.create!(question_params)
    json_response(@question, :created)
  end
  
  # GET /questions/:id
  def show
    json_response(@question)
  end
  
  # PUT /questions/:id
  def update
    @question.update(question_params)
  end
  
  # DELETE /questions/:id
  def destroy
    @question.destroy
  end
  
  # POST /questions/:id/answer
  def answer
    @userAnswer = params[:answer]
    @id = params[:question_id]
    @questionAnswer = Question.find(@id).answer

    @result = check_answer(@userAnswer, @questionAnswer)
    
    json_response(:result => @result)
  end

  private

  def question_params
    params.permit(:content, :answer)
  end
  
  def set_question
    @question = Question.find(params[:id])
  end
end
