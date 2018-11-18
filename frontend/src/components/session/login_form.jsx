import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const admin = Object.assign({}, this.state);
        this.props.processForm(admin);
    }

    render() {
        return <div className="login-form-container">
            <Link to="/signup">Signup Instead</Link>
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="close">
                </div>
                <h2 className="login-message">WELCOME BACK!</h2>
                <br />
                <div className="login-form">
                    <label>
                        Email:
              <br />
                        <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Password:
              <br />
                        <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
                    </label>

                    <br />

                    <button className="session-submit">
                        <input id="session-submit" type="submit" value={this.props.formType} />
                    </button>
                    <br />
                </div>
            </form>
        </div>;
    }
}

export default withRouter(LoginForm);
