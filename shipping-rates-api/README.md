# README

Shipping Rates
* Database
- postgres db should be running in the background
`>> bundle`
`>> bundle exec rails db:setup`
* Configuration
To import provided csv data into activerecord and the postgres db:
- Navigate in Terminal to ensure you're at the top of the `shipping-rates-api` folder
`>> rails console`
`>> ShippingServiceProvider.csv_import('app/service_provider_data.csv')`
`>> ShippingRate.csv_import('app/rate_data.csv')`

