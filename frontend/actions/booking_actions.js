import * as APIUtil from '../util/booking_api_util';
// import { RECEIVE_ERRORS } from './session_actions';


export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const fetchBookings = (userId) => dispatch => {
  return APIUtil.fetchBookings(userId).then(
    bookings => dispatch(receiveAllBookings(bookings))
  );
};

export const fetchBooking = bookingId => dispatch => {
  return APIUtil.fetchBooking(bookingId).then(
    booking => dispatch(receiveBooking(booking))
  );
};

export const createBooking = booking => dispatch => {
  return APIUtil.createBooking(booking).then(
    booking => dispatch(receiveBooking(booking))
  );
};

export const updateBooking = booking => dispatch => {
  return APIUtil.updateBooking(booking).then(
    booking => dispatch(receiveBooking(booking))
  );
};

export const destroyBooking = bookingId => dispatch => {
  debugger
  return APIUtil.destroyBooking(bookingId).then(
    () => dispatch(removeBooking(bookingId))
  );
};