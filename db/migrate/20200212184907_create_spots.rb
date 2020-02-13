class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :address, null: false 
      t.string :city, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :decription, null: false
      t.float :price, null: false
      t.integer :host_id, null: false

      t.timestamps
    end
  end
end
