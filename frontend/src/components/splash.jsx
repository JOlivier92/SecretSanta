import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutAdmin } from "../util/session_api_util";

const Splashpage = ({ loggedIn, logout }) => {
  if (loggedIn) {
    return (
      <div className="splash">
        <Link to="/" onClick={() => logout()}>
          Log Out
        </Link>
      </div>
    );
  } else {
    return (
      <div className="splash">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
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

