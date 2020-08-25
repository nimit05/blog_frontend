import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style/style.scss'
import {Provider} from 'react-redux';
import {store , persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate persistor = {persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


