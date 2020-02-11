import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDT3UHIOnWQ8bBk2EUdLOYq0XfQbYaDJ8A',
  authDomain: 'portfolio-c50b3.firebaseapp.com',
  databaseURL: 'https://portfolio-c50b3.firebaseio.com',
  projectId: 'portfolio-c50b3',
  storageBucket: 'portfolio-c50b3.appspot.com',
  messagingSenderId: '977496555049',
  appId: '1:977496555049:web:871deeb0d6d04d8a772638',
  measurementId: 'G-0FCK4BP20R'
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();

export { firebaseApp, firebaseAuth };
