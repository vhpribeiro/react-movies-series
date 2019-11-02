import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Home } from './templates';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(<Home />, rootElement);

serviceWorker.unregister();
