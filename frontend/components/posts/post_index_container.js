import { connect } from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, deletePost} from '../../actions/post_actions';

const mSTP = state => {
    return {
        posts: Object.values(state.entities.posts)
    };
};

const mDTP = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (postId) => dispatch(deletePost(postId))
    };
};

export default connect(mSTP, mDTP)(PostIndex);

