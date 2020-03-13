import { connect } from 'react-redux';
import User from './user';
import { selectBookings } from "../../reducers/selector";

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
    });
}

const mdp = (dispatch) => ({

});
 
export default connect(msp,mdp)(User)