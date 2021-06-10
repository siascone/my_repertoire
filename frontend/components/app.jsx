import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './profile/profile_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_controller';
import PostShowContainer from './posts/post_show_container';
import EditPostFormContainer from './posts/edit_post_form_container';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FeedContainer from './feed/feed_container';
// import Modal from './modal/modal'


const App = () => {
    
    return (
        <div>
            <header>
                <HeaderContainer />
            </header>
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
                <ProtectedRoute exact path='/feed' component={FeedContainer} />
                {/* post test routes */}
                <ProtectedRoute exact path='/posts/:postId/edit' component={EditPostFormContainer} />
                <ProtectedRoute exact path='/posts/:postId' component={PostShowContainer} />
                <ProtectedRoute exact path='/posts' component={PostIndexContainer} />

                <Route exact path='/' component={SplashContainer} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;