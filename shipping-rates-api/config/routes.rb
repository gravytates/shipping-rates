Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'shipping_rate/index'
      root to: 'shipping_rate#index'
      resources :shipping_rates
      resources :shipping_service_providers
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
