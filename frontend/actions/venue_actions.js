export const RECEIVE_VENUES = "RECEIVE_VENUES";
export const RECEIVE_VENUE = "RECEIVE_VENUE";
import * as venueUtils from '../util/venue_api_util';

const receiveVenues = (venues) => ({
    type: RECEIVE_VENUES,
    venues
})

const receiveVenue = (payload) => ({
    type: RECEIVE_VENUE,
    payload
})

export const fetchVenues = () => (dispatch) => {
    return venueUtils.fetchVenues()
        .then(venues => dispatch(receiveVenues(venues)))
        .fail(res => console.log(res))
}

export const fetchVenue = (venueId) => (dispatch) => {
    return venueUtils.fetchVenue(venueId)
        .then(payload => dispatch(receiveVenue(payload)))
        .fail(res => console.log(res))
}