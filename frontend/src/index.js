import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as serviceWorker from './serviceWorker';
import jwt_decode from "jwt-decode";
import * as APIUtil from "./util/session_api_util";
import './styles/css/main.css';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    if (localStorage.jwtToken) {
        // Set auth token header auth
        APIUtil.setAuthToken(localStorage.jwtToken);
        // Decode token and get Admin info and exp
        const decoded = jwt_decode(localStorage.jwtToken);
        // Set Admin and isAuthenticated
        store.dispatch(APIUtil.setCurrentAdmin(decoded));

        // Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            // Logout Admin
            store.dispatch(APIUtil.logoutAdmin());

        }
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    serviceWorker.register();
});

serviceWorker.unregister();

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
