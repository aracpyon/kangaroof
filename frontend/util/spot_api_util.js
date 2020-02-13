export const fetchSpots = data => {
  return $.ajax({
    method: "GET",
    url: 'api/spots',
    data
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

// export const createReview = review => {
//   return $.ajax({
//     method: "POST",
//     url: 'api/reviews',
//     data: { review }
//   })
// };