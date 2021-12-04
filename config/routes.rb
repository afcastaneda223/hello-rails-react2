Rails.application.routes.draw do
  root 'static#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'greeting', to: 'greetings#index'
  end

  get '*page', to: 'static#index'
end
