class ChangeRatesToBeMoneyType < ActiveRecord::Migration[5.2]

  def change
    add_monetize :shipping_rates, :rate 
    add_monetize :shipping_rates, :common_rate
    add_monetize :shipping_service_providers, :flat_rate
    add_monetize :shipping_service_providers, :common_rate
  end
end
