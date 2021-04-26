import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBo1cviChdETkeaQ_LH0QQszPcWQ2RzxKo",
    authDomain: "todo-ad80f.firebaseapp.com",
    databaseURL: "https://todo-ad80f.firebaseio.com",
    projectId: "todo-ad80f",
    storageBucket: "todo-ad80f.appspot.com",
    messagingSenderId: "211742469871",
    appId: "1:211742469871:web:e427ae070f0cae6aaeb51a",
    measurementId: "G-HP54DC268K"
  };
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

