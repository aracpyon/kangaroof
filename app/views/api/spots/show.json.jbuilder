json.partial! 'spot', spot: @spot
json.photoUrls @spot.photos.map { |file| url_for(file)}