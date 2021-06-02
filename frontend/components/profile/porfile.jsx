import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Hello, {this.props.user.fname}. Welcome to your profile, isn't this great!
            </div>
        )
    }

}

export default Profile;