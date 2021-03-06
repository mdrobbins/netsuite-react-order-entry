import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import * as customerActions from './actions/customerActions';

const store = configureStore();

// noinspection JSUnresolvedFunction
store.dispatch(customerActions.getRecentCustomers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
