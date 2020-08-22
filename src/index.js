import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style/style.scss'
import {Provider} from 'react-redux';
import store from '../src/redux/store'

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


