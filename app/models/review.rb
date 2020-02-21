class Review < ApplicationRecord
validates :author_id, :spot_id, :body, :rating, presence: true
validates :rating, inclusion: { in: (1..5) }

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :spot,
  class_name: :Spot,
  primary_key: :id,
  foreign_key: :spot_id

  

end
