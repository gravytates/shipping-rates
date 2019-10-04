class CreateShippingServiceProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :shipping_service_providers do |t|
      t.string :name
      t.integer :flat_rate
      t.string :currency
      t.integer :common_rate

      t.timestamps
    end
  end
end
