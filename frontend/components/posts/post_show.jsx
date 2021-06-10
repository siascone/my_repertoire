import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {

        if (!this.props.post) {
            return null;
        }

        return (
            <div className='post-show'>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <Link className='posts-link' to="/posts">Back to Posts</Link>
            </div>
        )
    }
}

export default PostShow;