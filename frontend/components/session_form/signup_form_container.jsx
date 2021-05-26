import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Login</Link>
    };
};

const mDTP = dispatch => {
    return {
        submitForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);