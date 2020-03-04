import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingForm from "./booking_form";
import {createBooking} from "../../util/booking_api_utils";

const msp = (state, ownProps) => ({
    
     currentUserId: state.session.id

});

const mdp = (dispatch) => ({
    createBooking: (booking) => (dispatch(createBooking))

});

export default withRouter(connect(msp,mdp)(BookingForm));