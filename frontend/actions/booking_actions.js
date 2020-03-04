export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
import * as bookingUtil from '../util/booking_api_utils';

const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking 
})

export const createBooking = (booking) => dispatch => {
    return bookingUtil.createBooking(booking)
            .then(booking => dispatch(receiveBooking(booking)))
}

