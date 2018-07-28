import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './Animation.css';

ReactDOM.render(<App name="start again"/>, document.getElementById('root'));
registerServiceWorker();