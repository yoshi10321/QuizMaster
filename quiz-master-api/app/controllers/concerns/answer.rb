module Answer
  def check_answer(userAnswer, questionAnswer)
    if userAnswer =~ /^[0-9]+$/
      userAnswer = userAnswer.to_i
    end

    if questionAnswer =~ /^[0-9]+$/
      questionAnswer = questionAnswer.to_i
    end

    if questionAnswer.humanize.downcase == userAnswer.humanize.downcase
      @result = "correct"
    else
      @result = "incorrect"
    end
  end
end