export const RECEIVE_VENUES = "RECEIVE_VENUES";
// export const RECEIVE_VENUE = "RECEIVE_VENUE";
import * as venueUtils from "../util/venue_api_util";

const receiveVenues = (venues) => ({
    type: RECEIVE_VENUES,
    venues
})

export const fetchVenues = () => (dispatch) => {
    return venueUtils.fetchVenues()
        .then(venues => dispatch(receiveVenues(venues)))
}
