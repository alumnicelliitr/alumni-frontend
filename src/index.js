import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'

import routes from './routes/routes'
import store from './store'

import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
