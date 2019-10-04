class AddShippingCompanyIdToShippingRate < ActiveRecord::Migration[5.2]
  def change
    add_column :shipping_rates, :shipping_company_id, :integer
  end
end
