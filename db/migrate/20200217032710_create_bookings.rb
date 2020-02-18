class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :num_guests, null: false
      t.integer :spot_id, null: false
      t.integer :guest_id, null: false

      t.timestamps
    end

    add_index :bookings, [:guest_id, :spot_id], unique: true
  end
end
