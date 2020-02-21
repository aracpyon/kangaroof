class Spot < ApplicationRecord
  validates :address, :title, :city, :lat, :lng, :description, :price, presence: true
  validates :price, numericality: true

  belongs_to :host,
  class_name: :User,
  primary_key: :id,
  foreign_key: :host_id

  has_many :bookings,
  class_name: :Booking, 
  primary_key: :id,
  foreign_key: :spot_id

  has_many :reviews,
  class_name: :Review,
  primary_key: :id,
  foreign_key: :spot_id

  has_many_attached :photos
  
  # def self.find_by_city(city) #cityname, country name
  #  spots = Spot.find_by(city: city)

  def self.search_by_keyword(keyword)
    # debugger
    result = self.where("city LIKE ?", "%#{keyword}%")
                 .or(where("address LIKE ?", "%#{keyword}%"))
                 .or(where("title LIKE ?", "%#{keyword}%" ))
                 
    # debugger
    return result
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end
  
end
