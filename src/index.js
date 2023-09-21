import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Firebase configuracion
const firebaseConfig = {
  apiKey: "AIzaSyBEVuRrL7b31OXOZC2XxPRTn3GvwTwJXvk",
  authDomain: "ankara-ecommerce.firebaseapp.com",
  projectId: "ankara-ecommerce",
  storageBucket: "ankara-ecommerce.appspot.com",
  messagingSenderId: "589411295321",
  appId: "1:589411295321:web:ca0d2db30c0491a64c5148"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
