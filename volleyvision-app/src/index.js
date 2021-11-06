import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorkerRegistration'
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './firebase/firebase'
import firebase from '@firebase/app-compat';

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();

// exports.saveNewUser = functions.auth.user().onCreate(async user => {
//   return admin
//   .firestore()
//   .collection('users')
//   .doc(user.uid)
//   .set(JSON.parse(JSON.stringify(user)));
// })

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
      <App />  
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
