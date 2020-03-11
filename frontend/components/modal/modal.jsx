import React from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { SignupFormContainer, LoginFormContainer } from "../session_form/form_container";
import { clearErrors } from "../../actions/session_actions";
import { updateFilter } from "../../actions/filter_actions";
import MoreFilterContainer from '../search/more_filter_container';

function Modal({modal, closeModal, updateFilter}) {
    if (!modal){
        return null;
    }
    let component; 
    switch(modal) {
        case "login": 
            component = <LoginFormContainer />;
            break;
        case "signup":
            component = <SignupFormContainer />;
            break;
        case "filters":
            component = <MoreFilterContainer updateFilter={updateFilter} closeModal={closeModal} />;
            break;
        default:
            return null;
    }
    return (
        <div>
            <div className="modal-background" onClick={closeModal}>
            </div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {
            dispatch(clearErrors());
            return dispatch(closeModal());
        },
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));