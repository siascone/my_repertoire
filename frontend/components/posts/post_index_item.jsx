import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => {
    return (
        <li>
            <Link to={`/posts/${props.post.id}`}>{props.post.title}</Link>
            <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
            <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
        </li>
    );
};

export default PostIndexItem;