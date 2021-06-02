import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import GreetingContainer from './header/header_container';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './profile/profile_container';
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
                <ProtectedRoute eaxct path='/users/:userId' component={ProfileContainer} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;