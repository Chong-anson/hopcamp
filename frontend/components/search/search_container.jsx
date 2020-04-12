import React from 'react'; 
import { connect } from "react-redux";
import { withRouter, useLocation } from 'react-router-dom';
import Search from "./search";
import { fetchCampsites } from "../../actions/campsite_actions";
// import { fetchVenue } from "../../actions/venue_actions";
import { updateFilter } from "../../actions/filter_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { filterCampsites } from '../../reducers/selector';

const msp = (state, ownProps) => {
    const { location, lat, lng } = state.ui.map;
    const typesFilter = state.ui.filter.type;
    // const parseQueryString = function () {

    //     var searchStr = ownProps.location.search;
    //     var params = {};

    //     searchStr.replace(/([^?=&]+)(=([^&]*))?/g,
    //         (dum, key, dum2, val) => {
    //             params[key] = val;
    //         }
    //     );
    //     return params;
    // };
    // const query = parseQueryString();
    // const lat = parseFloat(query['lat']);
    // const lng = parseFloat(query['lng']);
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
    filterButton: (
        <button className="type-filter" onClick={()=> dispatch(openModal("filters"))}>More filters</button>
    )

})

export default withRouter(connect(msp, mdp)(Search));
