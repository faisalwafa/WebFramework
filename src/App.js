import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Subheader from "./Subheader";
import Biodata from "./Biodata";

class Header extends Component {
  render() {
    return (
      <div>
        <h2>Halo TI-3G Polinema</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Subheader />
      <h1>hello</h1> */}
      <Biodata />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1>hello</h1>
//       </div>
//     );
//   }
// }
export default App;
