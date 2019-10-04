class ShippingRate < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'
  belongs_to :shipping_company, class_name: "ShippingServiceProvider"
  before_save :convert_currency
  validates :origin, :destination, :rate, :currency, :shipping_company_id, presence: true

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

  private
  
  def convert_currency
    common_rate = CurrencyConverter.convert_to_usd(self.rate, self.currency)
    self.update_attribute(:common_rate, common_rate)
  end
end
