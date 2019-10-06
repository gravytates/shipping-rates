# README

# Shipping Rates 

#### Requirements
- Rails 5.2.3
- Ruby 2.4.1
- npm 6.5.0

## Set up Backend
#### Database
- postgres db should be running in the background
- `>> bundle`
- `>> bundle exec rails db:setup`
#### Import Data
To import provided csv data into activerecord and the postgres db:
- Using Terminal navigate to the top of the `shipping-rates-api` folder, which should be one level below the project root.
- `>> rails console`
- `>> ShippingServiceProvider.csv_import('app/service_provider_data.csv')`
- `>> ShippingRate.csv_import('app/rate_data.csv')`

#### Start Backend Server
- To start the rails server, ensure you're still at the top of the `shipping-rates-api` folder, and run:
- `>> rails s -p 3001`

## Set up React Frontend
- With the backend server running, open up a second terminal tab. From the project root, navigate to the top of the `backend-code-challenge/react-spa` folder (the `backend-code-challenge` folder is a direct sibling to the `shipping-rates-api` folder).
- Install dependencies:
- `>> npm install`
#### Start Frontend Server
- `>> npm run start`
This will start a server which can be found locally in your browser at:
- `http://localhost:3000/`