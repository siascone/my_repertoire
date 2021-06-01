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
        debugger;
        const user = Object.assign({}, this.state);
        this.props.submitForm(user);
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
        this.props.login(user);
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
                        <label>First Name:
                                <input type="text"
                                value={this.state.fname}
                                onChange={this.update('fname')}
                            />
                        </label>
                    </div>
            lname = <div>
                        <label>Last Name:
                                <input type="text"
                                value={this.state.lname}
                                onChange={this.update('lname')}
                            />
                        </label>
                    </div>          
            email = <div>
                        <label>Email:
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                    </div>          
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div>
                        {fname}
                        {lname}
                        {email}
                        <div>
                            <label>Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                        </div>
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
                <button onClick={this.demoLogin}>Demo Login</button>
            </div>
        )

    }
}

export default SessionForm