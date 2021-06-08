import {connect} from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';
// import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Login',
        navLink: <Link to="/signup">Sign Up</Link>,
        history: ownProps.history
    };
};

const mDTP = dispatch => {
    return {
        submitForm: user => dispatch(login(user)),
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);