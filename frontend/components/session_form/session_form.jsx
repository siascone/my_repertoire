import React from 'react';

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
            .then((user) => this.props.history.push(`users/${user.id}`));
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
        let user = { username: 'username', password: 'password' }
        this.props.login(user)
            .then((user) => this.props.history.push(`users/${user.id}`));;
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
                            <p>First Name:</p>
                            <input type="text"
                                value={this.state.fname}
                                onChange={this.update('fname')}
                            />
                        </div>
                    </div>
            lname = <div>
                        <div className='session-input-container'>
                            <p>Last Name:</p>
                            <input type="text"
                                value={this.state.lname}
                                onChange={this.update('lname')}
                            />
                        </div>
                    </div>          
            email = <div>
                        <div className='session-input-container'>
                            <p>Email:</p>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </div>
                    </div>          
        }

        return (
            <div className='session-form'>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        {fname}
                        {lname}
                        {email}
                        <div>
                            <div className='session-input-container'>
                                <p>Username:</p>
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='session-input-container'>
                                <p>Password:</p>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>
                        </div>
                        <div className='login-buttons'>
                            <input type="submit" className='session-form-submit' value={this.props.formType} />
                            <button onClick={this.demoLogin}>Demo Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )

    }
}

export default SessionForm