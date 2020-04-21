import React from 'react'; 
import { connect } from "react-redux";
import { withRouter, useLocation } from 'react-router-dom';
import Search from "./search";
import { fetchCampsites } from "../../actions/campsite_actions";
// import { fetchVenue } from "../../actions/venue_actions";
import { updateFilter, resetAllFilter } from "../../actions/filter_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { filterCampsites } from '../../reducers/selector';
import { updateLocation } from '../../actions/map_action';

const msp = (state, ownProps) => {
    let { location, lat, lng } = state.ui.map;

    const typesFilter = state.ui.filter.type;
    const parseQueryString = function () {
        var searchStr = ownProps.location.search;
        var params = {};

        searchStr.replace(/([^?=&]+)(=([^&]*))?/g,
            (dum, key, dum2, val) => {
                params[key] = val;
            }
        );
        return params;
    };
    const query = parseQueryString();
    if (query["lat"]) lat = parseFloat(query['lat']);
    if (query["lng"]) lng = parseFloat(query['lng']);
    if (query["res"]) location = query["res"].replace(/%20/g, " ");
    return ({
        campsites: filterCampsites(state),
        location,
        lat,
        lng,
        typesFilter,
        selected: false
    })
}

const mdp = (dispatch) => ({
    fetchCampsites: ()=> dispatch(fetchCampsites),
    updateFilter: (filter, value) => dispatch(updateFilter(filter,value)),
    updateLocation: (location) => dispatch(updateLocation(location)),
    filterButton: (
        <button className="type-filter" onClick={()=> dispatch(openModal("filters"))}>More filters</button>
    ),
    resetAllFilter: () => dispatch(resetAllFilter())
    

})

export default withRouter(connect(msp, mdp)(Search));
