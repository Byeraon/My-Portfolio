import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCB5lA5Rj9PMj-9JOj-nS-h0OBPOQnU-ls",
  authDomain: "byeraon-portfolio.firebaseapp.com",
  projectId: "byeraon-portfolio",
  storageBucket: "byeraon-portfolio.appspot.com",
  messagingSenderId: "911458665939",
  appId: "1:911458665939:web:0d27affe0ea492275b1b26",
  measurementId: "G-NJG0QRNMMH",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
