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
            <div className='splash'>
                <h1 className='welcome'>Welcome to myRepertoire</h1>
                <p className='splash-blurb'>
                    Repertoire is web application designed as a supportive 
                    community network for performing artists. This will be a 
                    place where artists can showcase their repertoire, share 
                    their achievements and affiliated organizations and track 
                    their progress.
                </p>
            </div>
        )
    }
}

export default Splash;