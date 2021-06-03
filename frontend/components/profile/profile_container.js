import { connect }  from 'react-redux';
import Profile from './porfile';

const mSTP = (state, ownProps) => {
    // debugger;
    return {
        state: state,
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Profile)