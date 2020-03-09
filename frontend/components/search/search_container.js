import { connect } from "react-redux";
import { withRouter, useLocation } from 'react-router-dom';
import Search from "./search";
import { fetchCampsites } from "../../actions/campsite_actions";
import { fetchVenue } from "../../actions/venue_actions";
import { updateFilter } from "../../actions/filter_actions";

const msp = (state, ownProps) => {
    const parseQueryString = function () {

        var searchStr = ownProps.location.search;
        var params = {};

        searchStr.replace(/([^?=&]+)(=([^&]*))?/g,
            (dum, key, dum2, val) => {
                // console.log(`dum=${dum}`)
                // console.log(`key=${key}`)
                // console.log(`dum2=${dum2}`)
                // console.log(`val=${val}`)
                params[key] = val;
            }
        );
        return params;
    };
    const query = parseQueryString();
    // const query = useLocation().search;
    const lat = parseFloat(query['lat']);
    const lng = parseFloat(query['lng']);
    return ({
        campsites: Object.values(state.entities.campsites),
        lat,
        lng,
    })
    // campsites: selectCampsites(state),
    // SELECT CAMPSITES BASED ON TAGS,
    // minCapactiy: state.ui.filter.minCapactiy
    // minPrice: state.ui.filter.minPrice
    // maxPrice: state.ui.filter.maxPrice
}

const mdp = (dispatch) => ({
    fetchCampsites: ()=> dispatch(fetchCampsites),
    updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
})

export default withRouter(connect(msp, mdp)(Search));
