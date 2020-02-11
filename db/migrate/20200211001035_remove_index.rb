class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :name
    add_index :users, :email, unique: true
  end
end
