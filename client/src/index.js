import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store, persistor} from "./redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor = {persistor}>
        <App/>
      </PersistGate>
    </BrowserRouter>
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.register();

