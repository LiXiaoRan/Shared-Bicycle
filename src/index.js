import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './inde.less'
// import App from './router_demo/router3/router';
import 'antd/dist/antd.css'
import Router from './router';
import Admin from './admin'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
