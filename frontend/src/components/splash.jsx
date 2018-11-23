import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutAdmin } from "../util/session_api_util";
import styled from "styled-components";


const Splashpage = ({ loggedIn, logout }) => {
  if (loggedIn) {
    return <div className="splash">
        <Button>
          <Link to="/" onClick={() => logout()} className="splash-btn">log out</Link>
        </Button>
      </div>;
  } else {
    return <div className="splash">
        <Button>
          <Link to="/signup" className="splash-btn">sign up</Link>
        </Button>
        <Button>
          <Link to="/login" className="splash-btn">login</Link>
        </Button>
      </div>;
  }
};

const mapStateToProps = state => ({ loggedIn: Boolean(state.session.id) });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAdmin())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Splashpage)
);


const Button = styled.button`
  background: #cc231e;
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
  width: 120px;
  margin-right: 20px;
`;