Rails.application.routes.draw do
  get 'shipping_rate/index'
  root to: 'shipping_rate#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
