class AddColumnToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :title, :string, null: false
  end
end
