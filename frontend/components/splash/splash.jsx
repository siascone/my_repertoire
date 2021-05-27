import React from 'react';
import SessionForm from '../session_form/session_form';

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.state;
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Welcome to myRepertoire</h1>
                <SessionForm errors={this.props.errors}/>
            </div>
        )
    }
}

export default Splash;