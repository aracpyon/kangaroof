json.review do 
  # debugger
  json.partial! '/api/reviews/review', review: @review
end

json.author do
  # debugger
  json.partial! '/api/users/user', user: @review.author
end 
# debugger
json.average_rating @review.spot.average_rating