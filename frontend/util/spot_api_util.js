export const fetchSpots = () => {
  return $.ajax({
    method: "GET",
    url: 'api/spots'
  })
};

export const fetchSpot = spotId => {
  return $.ajax({
    method: "GET",
    url: `api/spots/${spotId}`
  })
};

export const createSpot = spot => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "api/spots",
    data: { spot }
  })
};

export const updateSpot = spot => {
  return $.ajax({
    method: "PATCH",
    url: `api/spots/${spot.id}`,
    data: { spot }
  })
}

export const createReview = review => {
  debugger
  return $.ajax({
    method: "POST",
    url: 'api/reviews',
    data: { review }
  })
};

export const fetchSearchResult = (keyword) => {
  // debugger
  return $.ajax({
    method: "GET",
    url: "api/search",
    data: { keyword }
  })
}