import { UPDATE_LOCATION } from '../../actions/map_action';

const _defaultState = {
  location: null,
  lat: null,
  lng: null
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