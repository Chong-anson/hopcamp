import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingForm from "./booking_form";
import { createBooking, clearErrors } from "../../actions/booking_actions";

const msp = (state, ownProps) => ({
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    bookings: ownProps.campsite.bookings.map(id => state.entities.bookings[id])
});

const mdp = (dispatch) => ({
  createBooking: (booking) => (dispatch(createBooking(booking))),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(msp,mdp)(BookingForm));