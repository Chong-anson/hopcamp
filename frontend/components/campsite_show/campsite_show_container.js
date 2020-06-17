import { connect } from "react-redux";
import CampsiteShow from "./campsite_show";
import { fetchCampsite } from "../../actions/campsite_actions";
import { fetchTags } from "../../actions/tag_actions";

const msp = (state, ownProps) => {
  const campsite = state.entities.campsites[ownProps.match.params.id];
  return {
    campsite: state.entities.campsites[ownProps.match.params.id],
    tags:
      campsite && !campsite.truncated
        ? campsite.tags.map((tagId) => state.entities.tags[tagId])
        : [],
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = (dispatch) => ({
  fetchCampsite: (campsiteId) => dispatch(fetchCampsite(campsiteId)),
  fetchTags: () => dispatch(fetchTags()),
});

export default connect(msp, mdp)(CampsiteShow);
