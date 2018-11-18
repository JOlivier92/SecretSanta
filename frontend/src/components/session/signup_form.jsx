import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
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
    return (
      <div className="signup-form-container">
        <Link to = "/login">Login Instead</Link>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="close" />
          <h2 className="signup-message">WELCOME BACK!</h2>
          <br />
          <div className="signup-form">
            <label>
              Email:
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"
              />
            </label>
            <br />
            <br />
            <label>
                Name:
                <br />
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    className="signup-input"
                />
                </label>
                <br />
                <br />
            <label>
              Password:
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
              />
            </label>

            <br />

            <button className="session-submit">
              <input
                id="session-submit"
                type="submit"
                value={this.props.formType}
              />
            </button>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
