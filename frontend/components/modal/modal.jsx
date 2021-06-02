import React from 'react';
import {closeModal, openModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import LoginContainer from '../session_form/login_form_controller';
import SignupContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal, openSignupModal, openLoginModal, history}) {
    if (!modal) {
        return null;
    }
    let component

    switch (modal) {
        case "login":
            component = <LoginContainer history={history}/>
            break;
        case 'signup':
            component = <SignupContainer history={history}/>
            break;
        default:
            return null;
    }

    let modalType = <div></div>;
    if (modal === 'login') {
        modalType = <div className="login-or-signup">
                        <p>Don't have an account yet?</p>
                        <input className='login-or-signup-input' type='submit' onClick={e => { e.preventDefault(); e.stopPropagation(); openSignupModal() }} value='Sign Up!' />
                    </div>
    }

    if (modal === 'signup') {
        modalType = <div className='login-or-signup'>
                        <p>Already have an account?</p>
                        <input className='login-or-signup-input' type='submit' onClick={e => { e.preventDefault(); e.stopPropagation(); openLoginModal() }} value='Login' />
                    </div>
    }

    return (
        <div className='modal' onClick={closeModal}>
            <div className='modal-component' onClick={e => e.stopPropagation()}>
                {component}
                {modalType}
            </div>
       </div>
    )
}

const mSTP = (state, ownProps) => {
    return {
        modal: state.ui.modal,
        history: ownProps.history
    }
};

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openSignupModal: () => dispatch(openModal('signup')),
    openLoginModal: () => dispatch(openModal('login'))
})

export default withRouter(connect(mSTP, mDTP)(Modal))