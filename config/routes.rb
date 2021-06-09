Rails.application.routes.draw do
  get 'api/users'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {formate: :json} do 
    resources :users, only: [:create, :index, :show]
    resources :posts, only: [:create, :index, :show, :update, :destory]
    resource :session, only: [:create, :destroy, :show]
  end

  root 'static_pages#root'
end
