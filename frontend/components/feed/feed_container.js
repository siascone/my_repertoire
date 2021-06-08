import {connect} from 'react-redux';

import Feed from './feed';

const mSTP = state => {
    return {
        state: state
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Feed);
