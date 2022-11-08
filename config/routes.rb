Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'root#index'

  namespace :api do
    namespace :v1 do 
      resources :users do     
      resources :hotels, only: [:index, :show] do 
        resources :reservations, only: [:create, :destroy]  
      end    
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :reservations, only: [:index]
      end
    end
  end
        
end
