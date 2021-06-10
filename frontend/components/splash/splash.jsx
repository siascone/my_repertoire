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
                <h3 className='welcome'>Welcome to myRepertoire</h3>
                <h5 className='splash-blurb'>
                    myRepertoire is web application designed as a supportive 
                    community network for performing artists. This will be a 
                    place where artists can showcase their repertoire, share 
                    their achievements and affiliated organizations and track 
                    their progress.
                </h5>
            </div>
        )
    }
}

export default Splash;