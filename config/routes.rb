Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :profiles, except: [:new, :edit]  do 
      resources :mylists, only: [:index]
    end
    resources :videos, only: [:index, :show]
    resources :genres, only:[:index] do 
      resources :videos, only: [:index]
    end
    resources :mylists, only:[:create, :show, :update, :delete]
    resources :categories, only: [:index]
  end
end