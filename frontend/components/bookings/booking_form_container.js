import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingForm from "./booking_form";
import {
  createBooking,
  clearErrors,
  receiveErrors,
} from "../../actions/booking_actions";
import { openModal } from "../../actions/modal_actions";
import { createPaymentInfo } from "../../actions/payment_actions";

const msp = (state, ownProps) => {
  var bookings;
  if (Object.keys(state.entities.bookings).length > 0) {
    bookings = ownProps.campsite.bookings.map(
      (id) => state.entities.bookings[id]
    );
  } else {
    bookings = [];
  }

  const previousDay = (date) => {
    const previous = new Date(date);
    previous.setDate(date.getDate() - 1);
    return previous;
  };
  const nextDay = (date) => {
    const next = new Date(date);
    next.setDate(date.getDate() + 1);
    return next;
  };
  const bookedCheckin = bookings.map((booking) => ({
    from: new Date(booking.startDate + " GMT-12"),
    to: previousDay(new Date(booking.endDate + " GMT-12")),
  }));
  const bookedCheckout = bookings.map((booking) => ({
    from: nextDay(new Date(booking.startDate + " GMT-12")),
    to: new Date(booking.endDate + " GMT-12"),
  }));
  return {
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    bookings,
    previousDay,
    nextDay,
    bookedCheckin,
    bookedCheckout,
  };
};

const mdp = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
  createPayment: (booking) => dispatch(createPaymentInfo(booking)),
  openModal: () => dispatch(openModal("login")),
});

export default withRouter(connect(msp, mdp)(BookingForm));
