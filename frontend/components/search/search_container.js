import { connect } from "react-redux";
import Search from "./search";
import { fetchCampsites } from "../../actions/campsite_actions";
import { fetchVenue } from "../../actions/venue_actions";
import { updateFilter } from "";

const msp = (state, ownProps) => ({
    campsites: selectCampsites(state),
    // SELECT CAMPSITES BASED ON TAGS,
    // minCapactiy: state.ui.filter.minCapactiy
    // minPrice: state.ui.filter.minPrice
    // maxPrice: state.ui.filter.maxPrice
})

const mdp = (dispatch) => ({
    fetchCampsites: ()=> dispatch(fetchCampsites),
    updateFilter: (filter,value) => dispatch(updateFilter(filter,value))
})

export default connect(msp, mdp)(Search);
