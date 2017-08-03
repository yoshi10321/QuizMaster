Rails.application.routes.draw do
  resources :questions do
    post :answer
  end
end
