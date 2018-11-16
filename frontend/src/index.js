import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<App store={store} />, root);
    registerServiceWorker();
});
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
