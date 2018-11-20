import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash';

const Homepage = () => (
  <div className="homepage">
    <h1 className="header">
      Spread the holiday cheer!
    </h1>
    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashPage}/>
    </Switch>
  </div>
);

export default Homepage;