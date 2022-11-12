import "./config.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GA4React from "ga-4-react";
const ga4react = new GA4React(process.env.REACT_APP_GA_TRACKING_CODE);
// console.log("asfsdg",k)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// (async _ => {
//   try {
//     await ga4react.initialize();
//   } catch (err) {
//     console.log("using adblocker");
//   }
//   // const root = ReactDOM.createRoot(document.getElementById('root'));
//   // root.render(
//   //   <React.StrictMode>
//   //     <App />
//   //   </React.StrictMode>
//   // );
//   ReactDOM.render(<App />, document.getElementById("root"));

// })();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
