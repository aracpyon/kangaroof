export const fetchBookings = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/bookings`
  })
};

export const fetchBooking = bookingId => {
  return $.ajax({
    method: "GET",
    url: `api/bookings/${bookingId}`
  })
};

export const createBooking = (booking) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `api/bookings`,
    data: { booking }
  })
};

export const updateBooking = (booking) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking }
  })
};

export const destroyBooking = (bookingId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/bookings/${bookingId}`
    
  })
};