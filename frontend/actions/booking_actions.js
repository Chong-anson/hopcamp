export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";
import * as bookingUtil from "../util/booking_api_utils";

const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    payload: {
      booking
    } 
})

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
})

export const createBooking = (booking) => dispatch => {
    return bookingUtil.createBooking(booking)
            .then(booking => dispatch(receiveBooking(booking)))
            .fail(res => dispatch(receiveErrors(res.responseJSON)))
            // .fail(res => console.log(res.responseJSON))
}

