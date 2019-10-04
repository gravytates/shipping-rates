class CreateShippingRates < ActiveRecord::Migration[5.2]
  def change
    create_table :shipping_rates do |t|
      t.string :origin
      t.string :destination
      t.integer :rate
      t.string :currency
      t.integer :common_rate
      t.string :created_by

      t.timestamps
    end
  end
end
