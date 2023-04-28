import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css"

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Provider store={store}><App /></Provider>)