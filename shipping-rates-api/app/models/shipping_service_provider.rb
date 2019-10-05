class ShippingServiceProvider < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'
  has_many :shipping_rates
  validates :name, :flat_rate, :currency, presence: true

  before_validation { |service_provider| 
    service_provider.common_rate = CurrencyConverter.convert_to_usd(service_provider.flat_rate, service_provider.currency) 
  }

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
