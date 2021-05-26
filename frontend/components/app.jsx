import React from 'react';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_controller';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
    <div>
        <header>
            <Link to="/" >
                myRepertoire
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="login" component={LoginFormContainer} />
            <AuthRoute exact path="signup" component={SignUpFormContainer} />
        </Switch>
    </div>
}

export default App;