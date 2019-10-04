class ShippingServiceProvider < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'

  def self.csv_import(file)
    shipping_service_providers = []
    CSV.foreach(file.path, headers: true) do |row|
      formatted_row = [["name", "flat_rate", "currency"],
                      [row[1][1], row[1][2], row[1][3]]]

      shipping_service_providers << ShippingServiceProvider.new(formatted_row.to_h)
    end
    ShippingServiceProvider.import shipping_service_providers, recursive: true
end
