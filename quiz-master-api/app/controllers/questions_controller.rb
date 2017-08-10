class QuestionsController < ApplicationController
  include Answer

  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    @order = params[:order]
    if @order == "difficult"
      @questions = Question.includes(:correct_rate).order("correct_rates.correct_rate ASC").all
    else
      @questions = Question.order("id DESC").all
    end
    json_response(@questions.to_json(:include => :correct_rate))
  end
  
  # POST /questions
  def create
    @question = Question.create!(question_params)
    json_response(@question, :created)
  end
  
  # GET /questions/:id
  def show
    json_response(@question.to_json(:include => :correct_rate))
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

    @correctRate = CorrectRate.find_or_initialize_by(question_id: @id)
    @correctRate.update_by_answer_result(@result)

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
