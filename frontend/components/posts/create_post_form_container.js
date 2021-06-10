import { connect } from 'react-redux';
import PostForm from './post_form';

import { createPost } from '../../actions/post_actions';

const mSTP = state => {
    return {
        post: {
        title: '',
        body: ''
        },
        formType: 'create'
    };
};

const mDTP = dispatch => {
    return {
        action: post => dispatch(createPost(post))
    };
};

export default connect(mSTP, mDTP)(PostForm);