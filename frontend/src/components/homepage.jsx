import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import styled from 'styled-components';
import Background from "../images/background.png";

const Homepage = () => (
  <Home>
    <Image src={ Background }></Image>
    <Snow aria-hidden="true">
          <Flakes>❄</Flakes>
          <Flakes>❅</Flakes>
          <Flakes>❆</Flakes>
          <Flakes>❄</Flakes>
          <Flakes>❅</Flakes>
          <Flakes>❆</Flakes>
          <Flakes>❄</Flakes>
          <Flakes>❅</Flakes>
          <Flakes>❆</Flakes>
          <Flakes>❄</Flakes>
        </Snow>
    <Header>
      Spread the holiday cheer!
    </Header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashPage}/>
    </Switch>
  </Home>
);

export default Homepage;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  height: 100vh;
  width: 100vw;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;
const Snow = styled.div``;

const Header = styled.h1`
  font-size: 50px;

  @media all and (max-width: 768px) {
    font-size: 40px;
  }

  @media all and (max-width: 640px) {
    font-size: 28px;
  }
`;

const Flakes = styled.div`
  color: #fff;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
  &:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
  }
  &:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
  }
  &:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, .5s;
    animation-delay: 6s, .5s;
  }
  &:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
  }
  &:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
  }
  &:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
  }
  &:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
  }
  &:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s;
  }
  &:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
  }
  &:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s;
  }

  @-webkit-keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @-webkit-keyframes snowflakes-shake {
    0% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
    50% {
      -webkit-transform: translateX(80px);
      transform: translateX(80px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;