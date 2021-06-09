import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST, 
    REMOVE_POST 
} from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            newState = Object.assign({}, state, action.posts);
            return newState;
        case RECEIVE_POST:
            newState = Object.assign({}, state, {[action.post.id]: action.post});
            return newState;
        case REMOVE_POST:
            nextState = Object.assign({}, state);
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }

}

export default PostsReducer;