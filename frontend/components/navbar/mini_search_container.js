import { connect } from "react-redux";
import MiniSearchBox from "./mini_search";
import { updateLocation } from "../../actions/map_action";

const msp = (state) => ({});

const mdp = (dispatch) => ({
  updateLocation: (location) => dispatch(updateLocation(location)),
});

export default connect(msp, mdp)(MiniSearchBox);
