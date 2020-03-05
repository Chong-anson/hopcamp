import { connect } from 'react-redux';
import { selectAllCities, selectAllTags } from "../../reducers/selector";
import { fetchVenues } from "../../actions/venue_actions";
import { fetchTags } from "../../actions/tag_actions";
import Splash from './splash';

const msp = (state, ownProps) => ({
    citiesList: selectAllCities(state),
    tagsList: selectAllTags(state),
    venues: Object.values(state.entities.venues),
    tags: Object.values(state.entities.tags)
})

const mdp = (dispatch) => ({
    fetchVenues: () => dispatch(fetchVenues()),
    fetchTags: () => dispatch(fetchTags())
})


export default connect(msp,mdp)(Splash);