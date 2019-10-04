class RemoveCreatedByFromShippingRate < ActiveRecord::Migration[5.2]
  def change
    remove_column :shipping_rates, :created_by, :string
  end
end
