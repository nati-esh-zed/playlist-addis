import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "@firebase/app";
import { Provider } from 'react-redux'
import store from './app/store'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeflEi6xXfZSktMtG1FGdMHeWqTynXNIs",
  authDomain: "playlist-aa561.firebaseapp.com",
  projectId: "playlist-aa561",
  storageBucket: "playlist-aa561.appspot.com",
  messagingSenderId: "333630742384",
  appId: "1:333630742384:web:25bd86352c72ef4f53b9b5"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Initialize Firebase
initializeApp(firebaseConfig);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
