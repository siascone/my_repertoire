import {connect} from 'react-redux';

import Feed from './feed';

const mSTP = state => {
    return {
        state: state,
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Feed);
