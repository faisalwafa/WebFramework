import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloComponent from "./component/HelloComponent";
import StateFullComponent from "./container/StateFullComponent";
import FormLogin from "./component/FormLogin";
import StatelessFormLogin from "./container/StatelessFormLogin";
import * as serviceWorker from "./serviceWorker";

// const HelloWorld = () => {
//   return <p>ini adalah function component</p>;
// };

// ReactDOM.render(<App />, document.getElementById("root"));
// class Statefullcomponent extends React.Component {
//   render() {
//     return <p>Ini adalah Statefull Component</p>;
//   }
// }
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
