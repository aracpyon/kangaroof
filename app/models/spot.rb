class Spot < ApplicationRecord
  validates :address, :title, :city, :lat, :lng, :description, :price, presence: true
  validates :price, numericality: true

  belongs_to :host,
  class_name: :User,
  primary_key: :id,
  foreign_key: :host_id

  has_many_attached :photos
  
  # def self.find_by_city(city) #cityname, country name
  #  spots = Spot.find_by(city: city)
end
