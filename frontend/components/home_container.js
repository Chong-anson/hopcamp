import { connect } from 'react-redux';
import { selectAllCities, selectAllTags } from "../reducers/selector";
import { fetchVenues } from "../actions/venue_actions";
import { fetchTags } from "../actions/tag_actions";
import Home from './home';

const msp = (state, ownProps) => ({
    citiesList: selectAllCities(state),
    tagsList: selectAllTags(state)
})

const mdp = (dispatch) => ({
    fetchVenues: () => dispatch(fetchVenues()),
    fetchTags: () => dispatch(fetchTags())
})


export default connect(msp,mdp)(Home);