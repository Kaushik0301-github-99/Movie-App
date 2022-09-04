import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

//! provider is use to use the store that we have created ---- sometimes we can even use without a provider
// import { Provider } from 'react-redux';

//! we are using the lagecy because it gives as a permission to use the before use content 
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './App';
import rootReducer from './reducer';

//! adding the middleware 
// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log("ACTION-TYPE = ",action.type)
//       next(action)
//     }
//   }
// }

//! we can write that middleware in another form
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log("ACTION-TYPE = ", action.type)
  }
  next(action);
}

//! creating a thunk middleWare 

// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//  if(typeof action==='function'){
//   action(dispatch)
//  console.log("ACTION-TYPE = ",action.type)
//   return;
//  }
//   next(action);

// }


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('store', store);
// console.log(' before state', store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Abhishek bkchod"}]
// })

// console.log('after state',store.getState())



//! creating a context which actually are accessable across the all components
// so what ever we pass in this context those are we providing into the provider and we can access them from consumer 
export const StoreContext = createContext();

console.log('storeContext', StoreContext)

class Provider extends React.Component {
  render() {
    const { store } = this.props;

    // now paading the children jsx component in between 
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>

  }
}


//! one thing to notice that when we use the react strict mode the component get called two times then remember it 







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
    <App />
  </Provider>

);


