import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "slim-js";
import "webco/components/t-header";
import "webco/components/t-message-box";
import "webco/components/t-message";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();