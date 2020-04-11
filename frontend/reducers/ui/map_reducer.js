import { UPDATE_LOCATION } from '../../actions/map_action';

const _defaultState = {
  location: "San Francisco",
  lat: 37.7758,
  lng: -122.435
}

export default (state = _defaultState, {type, payload} ) => {
  Object.freeze(state);
  switch(type) {
    case UPDATE_LOCATION:
      return Object.assign({}, state, payload);
    default: 
      return state;
  }
}