import React from 'react';
import { connect } from 'react-redux';

const ErrorShow = (props) => {
    const errors = props.errors[props.type].map( (el,idx) => (
        <li key={idx}>{el}</li>
    )
    )

    return (
        <div className="errors">
            <ul>
                {errors}
            </ul>

        </div>
    )
};

const msp = (state) => ({
    errors: state.errors
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(ErrorShow)