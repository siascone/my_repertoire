import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => {
    return (
        <li className='post-item'>
            <Link to={`/posts/${props.post.id}`}>{props.post.title}</Link>
            <br />
            <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
            <br />
            <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
        </li>
    );
};

export default PostIndexItem;