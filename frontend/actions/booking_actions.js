export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";
import * as bookingUtil from "../util/booking_api_utils";

const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  payload: {
    booking,
  },
});

const removeBooking = (bookingId) => ({
  type: REMOVE_BOOKING,
  payload: {
    bookingId,
  },
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
});

export const createBooking = (booking) => (dispatch) => {
  return bookingUtil
    .createBooking(booking)
    .then((bookingId) => dispatch(receiveBooking(bookingId)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};

export const deleteBooking = (bookingId) => (dispatch) => {
  return bookingUtil
    .deleteBooking(booking)
    .then((booking) => dispatch(receiveBooking(booking)))
    .fail((res) => dispatch(receiveErrors(res.responseJSON)));
};
