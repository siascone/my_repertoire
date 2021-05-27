import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passowrd: '',
            fname: '',
            lname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(user);
    }

    renderErrors() {
        debugger;
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

        if (this.props.formType === 'signup') {
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
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Welcome to myRepertoire!
                <br />
                Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div>
                        {fname}
                        {lname}
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
            </div>
        )

    }
}

export default SessionForm