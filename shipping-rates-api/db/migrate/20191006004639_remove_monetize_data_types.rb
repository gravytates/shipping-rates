class RemoveMonetizeDataTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :shipping_rates, :rate_cents
    remove_column :shipping_rates, :rate_currency
    remove_column :shipping_rates, :common_rate_cents
    remove_column :shipping_rates, :common_rate_currency

    remove_column :shipping_service_providers, :flat_rate_cents
    remove_column :shipping_service_providers, :flat_rate_currency
    remove_column :shipping_service_providers, :common_rate_currency
    remove_column :shipping_service_providers, :common_rate_cents

    change_column :shipping_rates, :rate, :float
    change_column :shipping_rates, :common_rate, :float
    change_column :shipping_service_providers, :flat_rate, :float
    change_column :shipping_service_providers, :common_rate, :float
  end
end
