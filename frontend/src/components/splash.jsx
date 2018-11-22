import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutAdmin } from "../util/session_api_util";
import styled from 'styled-components';

const Splashpage = ({ loggedIn, logout }) => {
  if (loggedIn) {
    return (
      <Splash>
        <StyledLink to="/" onClick={() => logout()}>
          Log Out
        </StyledLink>
      </Splash>
    );
  } else {
    return (
      <Splash>
        <StyledLink to="/signup">Sign Up</StyledLink>
        <br />
        <StyledLink to="/login">Log In</StyledLink>
      </Splash>
    );
  }
};

const mapStateToProps = state => ({ loggedIn: Boolean(state.session.id) });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAdmin())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Splashpage)
);


const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 22px;
`;



