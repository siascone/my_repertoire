import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {
        return (
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default PostShow;