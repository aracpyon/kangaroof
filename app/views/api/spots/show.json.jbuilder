json.spot do
  json.partial! 'spot', spot: @spot
  json.photoUrls @spot.photos.map { |file| url_for(file)}
end


@spot.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :name
    end
  end
end