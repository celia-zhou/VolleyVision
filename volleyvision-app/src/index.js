import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const fbc = {
  apiKey: "AIzaSyC4lk1ACdzgs93tnuze1BSkwX2KmvRqu8Q",
  authDomain: "volleyvision-e6c88.firebaseapp.com",
  databaseURL: "https://volleyvision-e6c88-default-rtdb.firebaseio.com",
  projectId: "volleyvision-e6c88",
  storageBucket: "volleyvision-e6c88.appspot.com",
  messagingSenderId: "810069680059",
  appId: "1:810069680059:web:ece16ae4ede793ee826e9e",
  measurementId: "G-1Z6HRYP7NT"
}

const store = createStore(
  rootReducer, 
  compose (
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
)

const rrfProps = {
  firebase,
  config: fbc,
  dispatch: store.dispatch,
  createFirestoreInstance 
}
  

ReactDOM.render(
  <Provider store = {store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
