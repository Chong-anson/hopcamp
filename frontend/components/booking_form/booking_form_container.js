import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingForm from "./booking_form";
import {createBooking} from "../../actions/booking_actions";

const msp = (state, ownProps) => ({
    
     currentUserId: state.session.id

});

const mdp = (dispatch) => ({
    createBooking: (booking) => (dispatch(createBooking(booking)))

});

export default withRouter(connect(msp,mdp)(BookingForm));