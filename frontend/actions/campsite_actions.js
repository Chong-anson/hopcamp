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
                // .fail(res => console.log(res))
}

export const fetchCampsite = (campsiteId) => (dispatch) => {
    return campsiteUtil.fetchCampsite(campsiteId)
                .then(campsite => dispatch(receiveCampsite(campsite)))
                // .fail(res => console.log(res))
}

// export const updateFilter = (filter, value) => {
//     return (dispatch, getState) => {
//         dispatch({
//             type: UPDATE_FILTER,
//             filter,
//             value
//         });
//         return (dispatch(requestCampsites(getState.ui.filter)))
//     }
// }