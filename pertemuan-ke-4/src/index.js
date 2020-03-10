import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import StatefullFormLogin from "./container/StatefullFormLogin";
import StatelessFormLogin from "./component/StatelessFormLogin";
import * as serviceWorker from "./serviceWorker";
import BlogPost from "./container/BlogPost/BlogPost";
import Mahasiswa from "./container/Tugas/Mahasiswa";

ReactDOM.render(<Mahasiswa />, document.getElementById("content"));
// ReactDOM.render(<StatelessFormLogin />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
