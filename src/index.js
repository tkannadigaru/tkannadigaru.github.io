import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Language, setDefault, setTranslations } from '@react-lang/language'
import en from './Assets/language/en.json'
import kn from './Assets/language/kn.json'
import sv from './Assets/language/sv.json'

setDefault('kn')
setTranslations({ kn, en, sv })

ReactDOM.render(
  <React.StrictMode>
    <Language>
    <App />
    </Language>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
