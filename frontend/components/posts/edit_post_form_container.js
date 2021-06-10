import React from 'react';
import {connect} from 'react-redux';
import PostForm from './post_form';
import {fetchPost, updatePost} from '../../actions/post_actions';

class EditPostForm extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
    }

    render() {
        if (!this.props.post) {
            return null;
        }

        return (
            <PostForm 
                action={this.props.action}
                formType={this.props.formType}
                post={this.props.post}
            />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        post: state.entities.post[ownProps.match.params.postId],
        formType: 'Update'
    };
};

const mDTP = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        action: post => dispatch(updatePost(post))
    };
};

export default connect(mSTP, mDTP)(EditPostForm);