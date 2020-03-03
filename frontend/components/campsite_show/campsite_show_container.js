import { connect } from 'react-redux';
import CampsiteShow from './campsite_show';
import { fetchCampsite } from '../../actions/campsite_actions';

const msp = (state, ownProps) => ({
    campsite: state.entities.campsites[ownProps.match.params.id]
})

const mdp = (dispatch) => ({
    fetchCampsite: (campsiteId) => dispatch(fetchCampsite(campsiteId))
})

export default connect(msp,mdp)(CampsiteShow);