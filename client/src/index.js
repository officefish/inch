import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/tailwind.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

import store from "./redux/store"
import {BrowserRouter} from "react-router-dom";

import App from './components/mui/app.mui'
//import BezkoderAuthApp from "./components/bezcoder/app"

// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//      </BrowserRouter>,
//   document.getElementById('root')
// );

 ReactDOM.render(
     <BrowserRouter>
         <Provider store={store}>
             {/* <BezkoderAuthApp /> */}
             <App />
         </Provider>
      </BrowserRouter>,
   document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
