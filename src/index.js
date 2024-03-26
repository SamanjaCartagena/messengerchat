import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3M6ydCaSi31kSfq7wdUw_2Kd7I_JEZB0",
  authDomain: "messenger-cdb9d.firebaseapp.com",
  projectId: "messenger-cdb9d",
  storageBucket: "messenger-cdb9d.appspot.com",
  messagingSenderId: "859174799975",
  appId: "1:859174799975:web:fbd1c99605d64cf3c6a2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


