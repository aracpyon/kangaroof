class Booking < ApplicationRecord
  validates :guest_id, uniqueness: { scope: :spot_id }
  validates :start_date, :end_date, :num_guests, presence: true

  belongs_to :spot,
  class_name: :Spot, 
  primary_key: :id,
  foreign_key: :spot_id

  has_one :host,
  through: :spot,
  source: :host

  belongs_to :guest,
  class_name: :User,
  primary_key: :id,
  foreign_key: :guest_id
  
end
