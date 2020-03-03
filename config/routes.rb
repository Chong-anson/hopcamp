Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
    resources :campsites, only: [:index, :show]
    resources :venues, only: [:index, :show]
  end
  root to: "static_pages#root"
end
