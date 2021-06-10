import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        if (!this.props.posts) {
            return null;
        }
        
        return (
            <div>
                <ul>
                    {
                        this.props.posts.map(post => (
                            <PostIndexItem 
                                post={post}
                                deletePost={this.props.deletePost}
                                key={post.id}
                            />
                        ))
                    }
                </ul>
                <CreatePostFormContainer />
            </div>
        )
    }
}

export default PostIndex;