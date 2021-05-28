import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './header';

const mSTP = ({ session, entities: { users }}) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal('login'))
});

export default connect(mSTP, mDTP)(Greeting);