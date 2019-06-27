import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
// do not register the service worker
serviceWorker.unregister()
ReactDOM.render(<App />, document.getElementById('root'));

