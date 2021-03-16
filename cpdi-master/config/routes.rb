Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "dashboard#index"
  # get "dashboard_unauth#index"
end

Rails.application.routes.draw do
  root "dashboard_unauth#index"
end