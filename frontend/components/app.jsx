import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import GreetingContainer from './header/header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_controller';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'


const App = () => {
    
    return (
        <div>
            <Modal />
            <header>
                <GreetingContainer />
            </header>
            <Switch>
                <Route exact path='/' component={SplashContainer} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;