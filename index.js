// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxV7692WNTm3DIFr52QKTKZ-f9RcyiA6s',
  authDomain: 'dodaland-com.firebaseapp.com',
  databaseURL: 'https://dodaland-com.firebaseio.com',
  projectId: 'dodaland-com',
  storageBucket: 'dodaland-com.appspot.com',
  messagingSenderId: '152835075270',
  appId: '1:152835075270:web:b14c4b38c60a8e87df3bc7',
  measurementId: 'G-6B1C3J3LGY',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('test');
