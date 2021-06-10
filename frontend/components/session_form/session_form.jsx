import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passowrd: '',
            email: '',
            fname: '',
            lname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    // componentDidMount() {

    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const user = Object.assign({}, this.state);
        this.props.submitForm(user)
            .then(() => this.props.history.push('/feed'));
        // deal with .then to handle errors
        this.resetForm();
        this.props.closeModal();
    }

    resetForm() {
        this.setState({
                username: '',
                passowrd: '',
                email: '',
                fname: '',
                lname: ''
        })
    }

    demoLogin(e) {
        e.preventDefault();
        e.stopPropagation();
        let user = { username: 'guest', password: 'password' }
        this.props.login(user)
            .then(() => this.props.history.push(`/feed`));;
        this.props.closeModal();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        let fname = <div></div>;
        let lname = <div></div>;
        let email = <div></div>

        if (this.props.formType === 'Sign Up!') {
            fname = <div>
                        <div className='session-input-container'>
                            <input type="text"
                                className='session-input'
                                placeholder='First Name'
                                value={this.state.fname}
                                onChange={this.update('fname')}
                            />
                        </div>
                    </div>
            lname = <div>
                        <div className='session-input-container'>
                            <input type="text"
                                className='session-input'
                                placeholder='Last Name'                                
                                value={this.state.lname}
                                onChange={this.update('lname')}
                            />
                        </div>
                    </div>          
            email = <div>
                        <div className='session-input-container'>
                            <input type="text"
                                className='session-input'
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </div>
                    </div>          
        }

        let option = <div></div>;
        if (this.props.formType === 'Login') {
            option = <div className="login-or-signup">
                        <p>Don't have an account? <Link className='login-option' to="/signup">Sign up for free today!</Link></p>
                        <p>Or explore as a <a className="guest-login" onClick={this.demoLogin}>Guest</a></p>

                    </div>
        }

        if (this.props.formType === 'Sign Up!') {
            option = <div className='login-or-signup'>
                        <p>Already have an account? <Link className='login-option' to="/login">Login</Link></p>
                        <p>Or explore as a <a className="guest-login" onClick={this.demoLogin}>Guest</a></p>
                    </div>
        }

        return (
            <div className='session-form'>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        <div className="tagline">
                            <p>Ready to Perform!</p>
                        </div>
                        {fname}
                        {lname}
                        {email}
                        <div>
                            <div className='session-input-container'>
                                {/* <p>Username:</p> */}
                                <input className='session-input' type="text"
                                    value={this.state.username}
                                    placeholder='Username'
                                    onChange={this.update('username')}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='session-input-container'>
                                {/* <p>Password:</p> */}
                                <input className='session-input' type="password"
                                    value={this.state.password}
                                    placeholder='Password'
                                    onChange={this.update('password')}
                                />
                            </div>
                        </div>
                        <div className='login-buttons'>
                            <input type="submit" className='session-form-submit' value={this.props.formType} />
                        </div>
                    </div>
                    {option}
                </form>
            </div>
        )

    }
}

export default SessionForm