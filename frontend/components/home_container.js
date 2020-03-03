import { connect } from 'react-redux';
import { selectAllCities } from "../reducers/selector";
import { fetchVenues } from "../actions/venue_actions";
import Home from './home';

const msp = (state, ownProps) => ({
    citiesList: selectAllCities(state),
})

const mdp = (dispatch) => ({
    fetchVenues: () => dispatch(fetchVenues())
})


export default connect(msp,mdp)(Home);