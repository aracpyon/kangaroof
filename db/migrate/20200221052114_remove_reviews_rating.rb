class RemoveReviewsRating < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :rating, :float
  end
end
