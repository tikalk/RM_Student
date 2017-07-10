import React from 'react';
import './index.css';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "slim-js";
import "webco/components/t-header";
import "webco/components/t-message-box";
import "webco/components/t-message";

render((<App />), document.getElementById('root'));

registerServiceWorker();