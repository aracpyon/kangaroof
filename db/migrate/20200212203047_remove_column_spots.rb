class RemoveColumnSpots < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :decription, :description
  end
end
