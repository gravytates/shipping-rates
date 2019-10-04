class ShippingRate < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'

  def self.csv_import(file)
    shipping_rates = []
    CSV.foreach(file.path, headers: true) do |row|

      formatted_row = [["origin", "destination", "rate", "currency", "shipping_company_id"],
                [row[1][2], row[1][3], row[1][0], row[1][1], row[1][4]]]

      shipping_rates << ShippingRate.new(formatted_row.to_h)
    end
    ShippingRate.import shipping_rates, recursive: true
end
