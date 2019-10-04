class ShippingServiceProvider < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'

  def self.csv_import(file)
    shipping_service_providers = []
    CSV.foreach(file, headers: true) do |row|
      formatted_row = [
                       ["name", row["name"]], 
                       ["flat_rate", row["flat shipping rate"]], 
                       ["currency", row["currency"]]
                      ]

      shipping_service_providers << ShippingServiceProvider.new(formatted_row.to_h)
    end
    ShippingServiceProvider.import shipping_service_providers, recursive: true
  end
end
