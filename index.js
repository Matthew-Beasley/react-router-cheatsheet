// index.js is already done in video-roulette, just for example here
// bring react pieces into index.js...
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

//This wraps our app with a <HashRouter> so Router is available globally
//Could also have been <BrowserRouter> but hash is more reliable
const root = document.querySelector('#root');
ReactDOM.render(<Router><App /></Router>, root);