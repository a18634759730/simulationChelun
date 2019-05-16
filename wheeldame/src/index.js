import React from 'react';

import ReactDOM from 'react-dom';

import './scss/Cerindex.css'

import * as serviceWorker from './serviceWorker';

import IndexPage from './views/IndexPage';

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




