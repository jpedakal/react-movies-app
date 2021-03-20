import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './bootstrap.min.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
