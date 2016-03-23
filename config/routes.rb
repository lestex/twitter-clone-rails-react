Rails.application.routes.draw do
  resources :followers do |r|
    collection do
      get 'random'
    end
  end

  resources :tweets
  devise_for :users  
  
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'
  root 'home#index'
  
end
