import React from 'react';
import  ReactDOM  from 'react-dom/client';

//! provider is use to use the store that we have created ---- sometimes we can even use without a provider
// import { Provider } from 'react-redux';

//! we are using the lagecy because it gives as a permission to use the before use content 
import {legacy_createStore as createStore} from 'redux'


import './index.css';
import App from './App';
import rootReducer from './reducer';

// 
const store = createStore(rootReducer);
// console.log('store', store);
// console.log(' before state', store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Abhishek bkchod"}]
// })

// console.log('after state',store.getState())


//! one thing to notice that when we use the react strict mode the component get called two times then remember it 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Provider  >
  <>
    <App store = {store}/>
  </>
  //  </Provider>
);


