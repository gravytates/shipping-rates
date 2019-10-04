class ShippingServiceProvider < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'
  has_many :shipping_rates
  before_save :convert_currency
  validates :name, :flat_rate, :currency, presence: true

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

  private
  
  def convert_currency
    common_rate = CurrencyConverter.convert_to_usd(self.flat_rate, self.currency)
    self.update_attribute(:common_rate, common_rate)
  end
end
