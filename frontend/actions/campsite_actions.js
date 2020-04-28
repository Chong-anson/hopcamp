export const RECEIVE_CAMPSITES = "RECEIVE_CAMPSITES";
export const RECEIVE_CAMPSITE = "RECEIVE_CAMPSITE";
import * as campsiteUtil from "../util/campsite_api_util";

const receiveCampsites = (payload) => ({
    type: RECEIVE_CAMPSITES,
    payload
})

const receiveCampsite = (payload) => ({
    type: RECEIVE_CAMPSITE,
    payload
})

export const fetchCampsites = (filter) => (dispatch) => {
    return campsiteUtil.fetchCampsites(filter)
                .then(res => dispatch(receiveCampsites(res)))
}

export const fetchCampsite = (campsiteId) => (dispatch) => {
    return campsiteUtil.fetchCampsite(campsiteId)
                .then(campsite => dispatch(receiveCampsite(campsite)))
}
