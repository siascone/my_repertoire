import React from 'react';

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='feed-main'>
                <div className='feed-greeting'>
                    <h3>Hello, {this.props.user.fname}</h3>
                    <h5>Your feed is coming soon.</h5>
                </div>
            </div>
        )
    }
}

export default Feed;