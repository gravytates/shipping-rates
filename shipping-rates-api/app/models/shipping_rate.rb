require 'pry'
class ShippingRate < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'

  belongs_to :shipping_company, class_name: "ShippingServiceProvider"
  validates :origin, :destination, :rate, :currency, :shipping_company_id, presence: true

  before_validation do |shipping_rate|
    shipping_rate.common_rate = CurrencyConverter.convert_to_usd(shipping_rate.rate, shipping_rate.currency) 
  end

  def self.csv_import(file)
    shipping_rates = []
    CSV.foreach(file, headers: true) do |row|
      formatted_row = [
                        ["origin", row["origin"]],
                        ["destination", row["destination"]],
                        ["rate", row["rate"]],
                        ["currency", row["currency"]],
                        ["shipping_company_id", row["shipping company id"]]
                      ]

      shipping_rates << ShippingRate.new(formatted_row.to_h)
    end
    ShippingRate.import shipping_rates, recursive: true
  end
end
