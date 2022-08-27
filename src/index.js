import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';

import {legacy_createStore as createStore} from 'redux'


import './index.css';
import App from './App';
import movies from './reducer';

const store = createStore(movies);
console.log('store', store);
console.log('state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


