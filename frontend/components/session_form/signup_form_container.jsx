import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions'
import SessionForm from './session_form';
// import {withRouter} from './react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up!',
        navLink: <Link to="/login">Login</Link>
    };
};

const mDTP = dispatch => {
    return {
        submitForm: (user) => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mSTP, mDTP)(SessionForm);