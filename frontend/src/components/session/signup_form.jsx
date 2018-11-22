import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from 'styled-components';

class LoginForm extends Component {
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
      <LoginWrapper>
        <SignupLink to = "/login">Login Instead</SignupLink>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="close" />
          <h2 className="signup-message">WELCOME BACK!</h2>
          <br />
          <div className="signup-form">
            <label>
              Email:
              <br />
              <Input
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
                <Input
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
              <Input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
              />
            </label>

            <br />

            <Button>
              <Input
                id="session-submit"
                type="submit"
                value={this.props.formType}
              />
            </Button>
            <br />
          </div>
        </form>
      </LoginWrapper>
    );
  }
}

export default withRouter(LoginForm);


const LoginWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 300px;
  height: 400px;
  border-radius: 15px;
  text-align: center;
  padding: 0.5rem;
`;

const SignupLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
`;

const Input = styled.input`
  width: 85%;
  height: 30px;
  font-size: 22px;
  color: gray;
  padding: 0 10px;
`;

const Button = styled.button`
  background: #cc231e;
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
  width: 120px;
`;
